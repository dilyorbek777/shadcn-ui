import Link from 'next/link'
import React from 'react'

export default function LinkToDoc({ url, title }: {
    url: string
    title: string
}) {
    return (
        <Link href={url}>
            {title}
        </Link>
    )
}
