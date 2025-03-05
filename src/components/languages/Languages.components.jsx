import React, { useState } from "react"

export const Langlinks= () => {
const languages = [{type: "English", href:""}]

return (
    <ul>
        {
            languages.map((language, index) => {
                return <li key={language + index}><a href={language.href}>{language.type}</a></li>
            })
        }
    </ul>
)


}