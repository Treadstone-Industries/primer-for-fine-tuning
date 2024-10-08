import React from 'react'
import {Select} from '../../src'
import FormControl from '../FormControl'
import figma from '@figma/code-connect'

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(Select, 'https://www.figma.com/design/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=15341-46907&m=dev', {
  props: {
    caption: figma.boolean('caption?'),
    label: figma.children('FormControl.Label'),
    size: figma.enum('size', {
      medium: 'medium',
      small: 'small',
      large: 'large',
    }),
    disabled: figma.enum('state', {
      disabled: true,
    }),
    validation: figma.children('Form.Validation'),
    block: figma.boolean('fullWidth?'),
  },
  example: ({size, disabled, block, label, validation}) => (
    <FormControl disabled={disabled}>
      {label}
      <Select size={size} block={block} />,{validation}
    </FormControl>
  ),
})
