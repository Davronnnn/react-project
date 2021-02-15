import React from 'react'
import './preview-collection.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'


function PreviewCollection(props) {
    return (
        <div className='collection-preview'>
            <h1>{props.title.toUpperCase()}</h1>
            <div className="preview">
               { props.items.filter((item,inx)=>inx<4).map(({id, ...otherItemProps})=>(
                    <CollectionItem key={props.id} {...otherItemProps}  />
                ))}
            </div>
        </div>
    )
}

export default PreviewCollection
