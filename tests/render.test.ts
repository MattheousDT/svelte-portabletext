/* eslint-disable */
// @ts-nocheck
import {cleanup, render} from '@testing-library/svelte'
import {format} from 'prettier'

import PortableText from '../src/lib/PortableText.svelte'

import allTests from './render-tests'

for (const renderTest of allTests) {
  test(renderTest.name, () => {
    const renderedByPackage = render(PortableText, {
      value: renderTest.value,
      components: renderTest.components
    }).container.innerHTML
    cleanup()
    const expectedRender = render(renderTest.rendered).container.innerHTML

    expect(format(renderedByPackage, {parser: 'html'})).toBe(
      format(expectedRender, {parser: 'html'})
    )
  })
}

// @TODO: add tests for props each type of block should be receiving
