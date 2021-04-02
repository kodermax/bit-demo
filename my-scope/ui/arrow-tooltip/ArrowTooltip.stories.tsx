import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { TooltipProps } from '@material-ui/core/Tooltip'
import ArrowTooltip from './ArrowTooltip'

export default {
  title: 'Shared/ArrowTooltip',
  component: ArrowTooltip,
} as Meta

const Template: Story<TooltipProps> = (args) => <ArrowTooltip {...args} />

export const ArrowTooltipDef = Template.bind({})
ArrowTooltipDef.args = {
  title: 'i am a tooltip',
  children: <span>text has tooltip</span>
}
