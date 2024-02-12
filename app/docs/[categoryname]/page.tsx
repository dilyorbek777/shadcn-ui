import { docs } from '@/utils'
import React from 'react'

export default function Detail({ params }: {
    params: {
        categoryname:
        string
    }
}) {
    return (
        <div>
            Product Details page {params.categoryname}
            {docs.map(dc => (
                <div>

                    {params.categoryname === dc.url ? <p>{dc.title}</p> : <p></p>}

                </div>

            ))}
        </div>
    )
}