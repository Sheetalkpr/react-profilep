import React from 'react'
import Post from './Post'
import Grid from '@mui/material/Grid'


const PostList = () => {
    const posts = [
      {
        title: 'R1',
        avatar: 'R',
        imageLink:
          'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000',
        description: 'Random  description',
        date: '12 September, 2022',
        shares: 265,
        likes: 1009,
      },
      {
        title: 'R1',
        avatar: 'R',
        imageLink:
          'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000',
        description: 'Random  description',
        date: '12 September, 2022',
        shares: 265,
        likes: 1009,
      },
      {
        title: 'R1',
        avatar: 'R',
        imageLink:
          'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000',
        description: 'Random  description',
        date: '12 September, 2022',
        shares: 265,
        likes: 1009,
      },
      {
        title: 'R1',
        avatar: 'R',
        imageLink:
          'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000',
        description: 'Random  description',
        date: '12 September, 2022',
        shares: 265,
        likes: 1009,
      },
      {
        title: 'R1',
        avatar: 'R',
        imageLink:
          'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000',
        description: 'Random   description',
        date: '12 September, 2022',
        shares: 265,
        likes: 1009,
      },
      {
        title: 'R1',
        avatar: 'R',
        imageLink:
          'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000',
        description: 'Random   description',
        date: '12 September, 2022',
        shares: 265,
        likes: 1009,
      },
      {
        title: 'R1',
        avatar: 'R',
        imageLink:
          'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000',
        description: 'Random   description',
        date: '12 September, 2022',
        shares: 265,
        likes: 1009,
      },
      {
        title: 'R1',
        avatar: 'R',
        imageLink:
          'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000',
        description: 'Random   description',
        date: '12 September, 2022',
        shares: 265,
        likes: 1009,
      },
      {
        title: 'R1',
        avatar: 'R',
        imageLink:
          'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000',
        description: 'Random   description',
        date: '12 September, 2022',
        shares: 265,
        likes: 1009,
      },
      {
        title: 'R1',
        avatar: 'R',
        imageLink:
          'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000',
        description: 'Random   description',
        date: '12 September, 2022',
        shares: 265,
        likes: 1009,
      },
      {
        title: 'R1',
        avatar: 'R',
        imageLink:
          'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000',
        description: 'Random   description',
        date: '12 September, 2022',
        shares: 265,
        likes: 1009,
      },
    ]
  return (
   <Grid container spacing={1}> 
        {posts.map(post => 
        <Grid item xs={4}>
        <Post avatar={post.avatar} title={post.title} description={post.description} date={post.date} imageLink={post.imageLink} shares={post.shares} likes={post.likes}/>
        </Grid>
        )}
    </Grid>
  )
}

export default PostList