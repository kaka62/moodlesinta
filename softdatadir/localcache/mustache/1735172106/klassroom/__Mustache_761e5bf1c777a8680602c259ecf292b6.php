<?php

class __Mustache_761e5bf1c777a8680602c259ecf292b6 extends Mustache_Template
{
    private $lambdaHelper;

    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $this->lambdaHelper = new Mustache_LambdaHelper($this->mustache, $context);
        $buffer = '';

        $buffer .= $indent . '<header id="page-header" class="internalbanner">
';
        $buffer .= $indent . '   <div class="container">
';
        $buffer .= $indent . '      <div class="card ';
        // 'contextheader' inverted section
        $value = $context->find('contextheader');
        if (empty($value)) {
            
            $buffer .= 'border-0 bg-transparent';
        }
        $buffer .= '">
';
        $buffer .= $indent . '         <div class="card-body ';
        // 'contextheader' inverted section
        $value = $context->find('contextheader');
        if (empty($value)) {
            
            $buffer .= 'p-2';
        }
        $buffer .= '">
';
        $buffer .= $indent . '            <div class="d-flex">
';
        $buffer .= $indent . '               <div class="mr-auto">
';
        $buffer .= $indent . '                  ';
        $value = $this->resolveValue($context->find('contextheader'), $context);
        $buffer .= $value;
        $buffer .= '
';
        $buffer .= $indent . '               </div>
';
        $buffer .= $indent . '            </div>
';
        $buffer .= $indent . '            <div class="mini-block"></div>
';
        $buffer .= $indent . '         </div>
';
        $buffer .= $indent . '      </div>
';
        $buffer .= $indent . '   </div>
';
        $buffer .= $indent . '</header>
';
        $buffer .= $indent . '<div id="page-navbar-con">
';
        $buffer .= $indent . '   <div class="container">
';
        $buffer .= $indent . '      <div class="card">
';
        $buffer .= $indent . '         <div class="card-body">
';
        $buffer .= $indent . '            <div class="d-flex flex-wrap">
';
        // 'hasnavbar' section
        $value = $context->find('hasnavbar');
        $buffer .= $this->section3352f76b736967fefeaed01e400bcd3e($context, $indent, $value);
        $buffer .= $indent . '               <div class="ml-auto d-flex">
';
        $buffer .= $indent . '                  ';
        $value = $this->resolveValue($context->find('pageheadingbutton'), $context);
        $buffer .= $value;
        $buffer .= '
';
        $buffer .= $indent . '               </div>
';
        $buffer .= $indent . '               <div id="course-header">
';
        $buffer .= $indent . '                  ';
        $value = $this->resolveValue($context->find('courseheader'), $context);
        $buffer .= $value;
        $buffer .= '
';
        $buffer .= $indent . '               </div>
';
        $buffer .= $indent . '            </div>
';
        $buffer .= $indent . '         </div>
';
        $buffer .= $indent . '      </div>
';
        $buffer .= $indent . '   </div>
';
        $buffer .= $indent . '</div>
';

        return $buffer;
    }

    private function section3352f76b736967fefeaed01e400bcd3e(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
               <div id="page-navbar">
                  {{{navbar}}}
               </div>
               ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '               <div id="page-navbar">
';
                $buffer .= $indent . '                  ';
                $value = $this->resolveValue($context->find('navbar'), $context);
                $buffer .= $value;
                $buffer .= '
';
                $buffer .= $indent . '               </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

}
