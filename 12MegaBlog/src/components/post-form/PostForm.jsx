import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {Input, Select, RTE } from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.slug || '',
      content: post?.content || '', // FIX: Adjusted to post?.content if tracking post content layout
    },
  })

  const navigate = useNavigate()
  const userData = useSelector((state) => state?.auth?.userData); 

  // FIX 1: Moved slugTransform up to the base component scope level
  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string') {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, '-') // FIX: Changed matching rule to catch non-alphanumeric blocks cleaner
        .replace(/\s/g, '-')
    }
    return ''
  }, [])

  // FIX 2: Moved useEffect out of the submit scope up to the component execution level
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title), { shouldValidate: true })
      }
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [watch, slugTransform, setValue])

  const submit = async (data) => {
    if (post) {
      // FIX 3: Added await to cleanly grab file metadata instead of a raw Promise object
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null
      
      if (file) {
        appwriteService.deleteFile(post.featuredImage)
      }
      
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      })
      
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }
    } else {
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null
      
      if (file) {
        const fileId = file.$id
        data.featuredImage = fileId
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData?.$id // Safe fallback protection
        })
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      {/* Left Column Area */}
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
      </div>
      
      {/* Right Column Area */}
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
          {post ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  )
}

export default PostForm
