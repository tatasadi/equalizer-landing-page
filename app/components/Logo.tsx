import React from 'react'

export default function Logo() {
  return (
    <picture>
      <source srcSet="/images/logo.svg" type="image/svg+xml" />
      <img src="/images/logo.png" alt="Equalizer Logo" />
    </picture>
  )
}
