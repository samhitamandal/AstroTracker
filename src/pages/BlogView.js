import '../stylesheets/BlogView.css'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import BlogHeader from '../components/BlogHeader'
import BlogContainer from '../components/BlogContainer'

import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import image from '../images/back.jpg'

function BlogView() {

  const blog_data=[
    { 
      blog_id:'1',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      blog_id:'2',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      blog_id:'3',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    }
  ];

  const [blog, setBlog]  = useState([]);

  const [data, setData] = useState([]);
  const id = useParams().id;

  useEffect(
    ()=>{
      const fetchData = async()=>{
        try{
          var res  = await axios.get("http://localhost:8800/blog/"+id);
          setData(res.data[0]);
          //console.log(res.data[0].category);
          res = await axios.get("http://localhost:8800/blog/category/"+res.data[0].category);
          setBlog(res.data.slice(0,3));
        }
        catch(err){
          console.log(err)
        }
      };
      fetchData();
    }
  )



  return (
    <div class="BlogView">
      <Header />
      <NavBar />
      <div className="blog_header"><BlogHeader data={data}/></div>
      <div className='container'>
        <img src={image} alt='Hahahah' className='blog-image'/>
        <p className='text'>
        {data.long_desc}<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat nulla, hendrerit nec fringilla et, egestas non sem. Integer non est quis turpis scelerisque dapibus. Nam ornare justo scelerisque quam placerat, sed ultrices nisl pulvinar. Quisque eu consequat enim, sit amet pretium augue. Nullam eget ipsum at felis bibendum dictum vitae id nulla. Nullam dictum dictum est, at pulvinar lectus feugiat id. Sed porttitor orci eu lectus feugiat, nec consectetur nisl accumsan. Aenean turpis nisl, tempus sit amet efficitur eget, posuere eu leo. Etiam et libero sit amet neque rhoncus fermentum. Nulla pellentesque ipsum magna, eleifend congue elit consectetur ac. Aenean eu ullamcorper urna, vitae egestas velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer quis tellus non odio volutpat fringilla eu quis eros.<br/>

          Nam non euismod elit, a mollis erat. Vivamus elit elit, tincidunt a malesuada vel, vestibulum non dolor. Praesent vitae lectus vel urna dictum eleifend. Phasellus finibus nulla nisi, ultrices lacinia ex fringilla ut. Suspendisse mattis dolor tellus, ac mollis orci posuere vel. Duis maximus purus sed euismod tincidunt. Sed hendrerit at ligula a egestas. Aliquam convallis efficitur velit. Morbi vestibulum consectetur convallis.<br/><br/>

          Sed ut viverra arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc in eleifend sem. In laoreet hendrerit auctor. Etiam id diam convallis, suscipit purus eget, placerat mauris. Aenean commodo ante sit amet ligula cursus, sit amet scelerisque nunc elementum.<br/><br/>

          Praesent ipsum mi, viverra ut tempor eget, viverra vitae nunc. Nunc rhoncus pellentesque mi. Ut imperdiet lorem pretium consequat congue. Nam quis purus quis tellus lacinia consectetur vitae tempus lorem. Sed nunc lacus, euismod eget elit id, pharetra porttitor eros. Vivamus tempus varius tellus, sed rhoncus nulla scelerisque sed. Fusce sed pellentesque magna. Phasellus orci odio, tincidunt vitae fermentum in, mollis eget risus. Etiam et efficitur ex, et sodales justo.<br/><br/>

          Sed aliquet nisi non orci suscipit bibendum. Nulla porta lorem sed est varius, ac tincidunt lectus efficitur. Pellentesque dui ligula, feugiat sit amet felis sit amet, sagittis mollis libero. In eu maximus erat. Nam eu rutrum mauris. Aliquam erat volutpat. Pellentesque sit amet porta nulla.


        </p>
      </div>
      <div style={{marginBottom:'3rem'}}>
        <div className='related-blogs-title'>Related blogs</div>
        <div>
          <BlogContainer data={blog} />
        </div>
        </div>
      </div>
  )
}

export default BlogView
