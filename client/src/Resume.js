import React, { Component } from 'react'
 
import CV from 'react-cv'

const Resume = () => {
    return (
        <CV
          personalData={{
            name: 'John Doe',
            title: 'Senior Software Developer',
            image: 'https://bulma.io/images/placeholders/128x128.png',
            contacts: [
              { type: 'email', value: 'john@example.com' },
              { type: 'phone', value: '+00 (123) 456 78 90' },
              { type: 'location', value: 'New York' },
              { type: 'website', value: 'example.com' },
              { type: 'linkedin', value: 'linkedin.com/in/notexists' },
              { type: 'twitter', value: 'twitter.com/404' },
              { type: 'github', value: 'github.com/404' }
          ]}}
          sections= {[{
            type: 'text',
            title: 'Career Profile',
            content: 'When I was child, I always want to be a developer.',
            icon: 'usertie'
          }]}
          branding={true} // or false to hide it.
        />
      )
}
 
export default Resume;