<?php

class __Mustache_a3be1d8ac0d83a368a885619f19a47b6 extends Mustache_Template
{
    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $buffer = '';

        $value = $this->resolveValue($context->findDot('output.doctype'), $context);
        $buffer .= $indent . $value;
        $buffer .= '
';
        $buffer .= $indent . '<html ';
        $value = $this->resolveValue($context->findDot('output.htmlattributes'), $context);
        $buffer .= $value;
        $buffer .= '>
';
        $buffer .= $indent . '<head>
';
        $buffer .= $indent . '   <title>';
        $value = $this->resolveValue($context->findDot('output.page_title'), $context);
        $buffer .= $value;
        $buffer .= '</title>
';
        $buffer .= $indent . '   <link rel="shortcut icon" href="';
        $value = $this->resolveValue($context->find('favicon'), $context);
        $buffer .= $value;
        $buffer .= '" />
';
        $buffer .= $indent . '   ';
        $value = $this->resolveValue($context->findDot('output.standard_head_html'), $context);
        $buffer .= $value;
        $buffer .= '
';
        $buffer .= $indent . '   <meta name="viewport" content="width=device-width, initial-scale=1.0">
';
        $buffer .= $indent . '</head>
';

        return $buffer;
    }
}
