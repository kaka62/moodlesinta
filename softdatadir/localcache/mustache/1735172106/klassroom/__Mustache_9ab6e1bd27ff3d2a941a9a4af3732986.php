<?php

class __Mustache_9ab6e1bd27ff3d2a941a9a4af3732986 extends Mustache_Template
{
    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $buffer = '';

        $buffer .= $indent . '<span>';
        $value = $this->resolveValue($context->find('reg'), $context);
        $buffer .= $value;
        $buffer .= '</span>';

        return $buffer;
    }
}
