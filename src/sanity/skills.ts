// sanity/skills.ts

import {defineType, defineField, defineArrayMember} from 'sanity'
export const skills = defineType( {
    name: 'skills',
    type: 'document',
    title: 'Skills',
    fields: [

       defineField( {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation :(Rule) => Rule.required() .error('This Field is Required'),
        }),
        defineField( {
            name: 'subheading',
            type: 'string',
            title: 'SubHeading',
        }),
        defineField( {
            name: 'paragraph',
            type: 'text',
            title: 'Paragragh',
        }),
        defineField( {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options:
            {source: 'title',}
        }),
        defineField( {
            name: 'image',
            type: 'image',
            title: 'Image',
          
           validation :(Rule) => Rule.required() .error('This Field is Required'),
        }),
        defineField( {
            name: 'content',
            title: 'Content',
            type: 'array', 
            of: [
                defineArrayMember({
                    type: 'block'})]
     
        }),
        defineField( {
            name: 'author',
            title: 'Author',
            type: 'reference', 
            to: [
                {type: 'author'}]
     
        }),
    ]
    
})