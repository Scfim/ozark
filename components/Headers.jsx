import React from "react"
import Head from "next/head"
import PropTypes from "prop-types"

export default function Headers({title}){
    return<Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/logo.jpg" />
    </Head>
}

Headers.defaultProps = {
    title:"Umarps Shop Manager"
}
Headers.propTypes = {
    title: PropTypes.string
}