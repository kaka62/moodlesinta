<?php

class __Mustache_a4131da3600be9d014fdf3a10ef30e2d extends Mustache_Template
{
    private $lambdaHelper;

    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $this->lambdaHelper = new Mustache_LambdaHelper($this->mustache, $context);
        $buffer = '';

        $buffer .= $indent . '<!-- Start Colour Switcher Section -->
';
        // 'displaycolourswitchersection' section
        $value = $context->find('displaycolourswitchersection');
        $buffer .= $this->sectionF9be3757900b961e3c1805f746e12d1f($context, $indent, $value);
        $buffer .= $indent . '<!-- End Colour Switcher Section -->
';

        return $buffer;
    }

    private function section7166c1425b7236588b8676a747ea95f5(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
      <span class="title">{{{colourswitcherheading}}}</span>
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
                
                $buffer .= $indent . '      <span class="title">';
                $value = $this->resolveValue($context->find('colourswitcherheading'), $context);
                $buffer .= $value;
                $buffer .= '</span>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section986add3e3803397202da5b17650a2d6f(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
      <span class="title2">{{{colourswitchertagline}}}</span>
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
                
                $buffer .= $indent . '      <span class="title2">';
                $value = $this->resolveValue($context->find('colourswitchertagline'), $context);
                $buffer .= $value;
                $buffer .= '</span>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section4ed59dfcec7a0e2c73b2aec9c25ac547(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
      <p>{{{colourswitcherdescription}}}</p>
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
                
                $buffer .= $indent . '      <p>';
                $value = $this->resolveValue($context->find('colourswitcherdescription'), $context);
                $buffer .= $value;
                $buffer .= '</p>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionF9be3757900b961e3c1805f746e12d1f(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
<div id="colourswitcher">
   <input type="checkbox" id="navigation2" />
   <label for="navigation2" class="slideblocklabel"><i class="fa fa-paint-brush"></i></label>
   <nav class="slideblock">
      {{#colourswitcherheading}}
      <span class="title">{{{colourswitcherheading}}}</span>
      {{/colourswitcherheading}}
      {{#colourswitchertagline}}
      <span class="title2">{{{colourswitchertagline}}}</span>
      {{/colourswitchertagline}}
      <ul class="clearfix">
         <li><a href="{{wwwroot}}./?klassroomcolour=blue" class="styleswitch
            colour-blue"><img src="{{config.wwwroot}}/theme/klassroom/pix/blue-theme2.png" alt="blue" /></a></li>
         <li><a href="{{wwwroot}}./?klassroomcolour=lightblue"
            class="styleswitch colour-lightblue"><img src="{{config.wwwroot}}/theme/klassroom/pix/lightblue-theme2.png"
            alt="lightblue" /></a></li>
         <li><a href="{{wwwroot}}./?klassroomcolour=red"
            class="styleswitch colour-red"><img src="{{config.wwwroot}}/theme/klassroom/pix/red-theme2.png"
            alt="red" /></a></li>
         <li><a href="{{wwwroot}}./?klassroomcolour=green"
            class="styleswitch colour-green"><img src="{{config.wwwroot}}/theme/klassroom/pix/green-theme2.png"
            alt="green" /></a></li>
         <li><a href="{{wwwroot}}./?klassroomcolour=yellow"
            class="styleswitch colour-yellow"><img src="{{config.wwwroot}}/theme/klassroom/pix/yellow-theme2.png"
            alt="yellow" /></a></li>
         <li><a href="{{wwwroot}}./?klassroomcolour=purple"
            class="styleswitch colour-purple"><img src="{{config.wwwroot}}/theme/klassroom/pix/purple-theme2.png"
            alt="purple" /></a></li>
         <div class="clearfix"></div>
      </ul>
      {{#colourswitcherdescription}}
      <p>{{{colourswitcherdescription}}}</p>
      {{/colourswitcherdescription}}
   </nav>
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
                
                $buffer .= $indent . '<div id="colourswitcher">
';
                $buffer .= $indent . '   <input type="checkbox" id="navigation2" />
';
                $buffer .= $indent . '   <label for="navigation2" class="slideblocklabel"><i class="fa fa-paint-brush"></i></label>
';
                $buffer .= $indent . '   <nav class="slideblock">
';
                // 'colourswitcherheading' section
                $value = $context->find('colourswitcherheading');
                $buffer .= $this->section7166c1425b7236588b8676a747ea95f5($context, $indent, $value);
                // 'colourswitchertagline' section
                $value = $context->find('colourswitchertagline');
                $buffer .= $this->section986add3e3803397202da5b17650a2d6f($context, $indent, $value);
                $buffer .= $indent . '      <ul class="clearfix">
';
                $buffer .= $indent . '         <li><a href="';
                $value = $this->resolveValue($context->find('wwwroot'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= './?klassroomcolour=blue" class="styleswitch
';
                $buffer .= $indent . '            colour-blue"><img src="';
                $value = $this->resolveValue($context->findDot('config.wwwroot'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '/theme/klassroom/pix/blue-theme2.png" alt="blue" /></a></li>
';
                $buffer .= $indent . '         <li><a href="';
                $value = $this->resolveValue($context->find('wwwroot'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= './?klassroomcolour=lightblue"
';
                $buffer .= $indent . '            class="styleswitch colour-lightblue"><img src="';
                $value = $this->resolveValue($context->findDot('config.wwwroot'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '/theme/klassroom/pix/lightblue-theme2.png"
';
                $buffer .= $indent . '            alt="lightblue" /></a></li>
';
                $buffer .= $indent . '         <li><a href="';
                $value = $this->resolveValue($context->find('wwwroot'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= './?klassroomcolour=red"
';
                $buffer .= $indent . '            class="styleswitch colour-red"><img src="';
                $value = $this->resolveValue($context->findDot('config.wwwroot'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '/theme/klassroom/pix/red-theme2.png"
';
                $buffer .= $indent . '            alt="red" /></a></li>
';
                $buffer .= $indent . '         <li><a href="';
                $value = $this->resolveValue($context->find('wwwroot'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= './?klassroomcolour=green"
';
                $buffer .= $indent . '            class="styleswitch colour-green"><img src="';
                $value = $this->resolveValue($context->findDot('config.wwwroot'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '/theme/klassroom/pix/green-theme2.png"
';
                $buffer .= $indent . '            alt="green" /></a></li>
';
                $buffer .= $indent . '         <li><a href="';
                $value = $this->resolveValue($context->find('wwwroot'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= './?klassroomcolour=yellow"
';
                $buffer .= $indent . '            class="styleswitch colour-yellow"><img src="';
                $value = $this->resolveValue($context->findDot('config.wwwroot'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '/theme/klassroom/pix/yellow-theme2.png"
';
                $buffer .= $indent . '            alt="yellow" /></a></li>
';
                $buffer .= $indent . '         <li><a href="';
                $value = $this->resolveValue($context->find('wwwroot'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= './?klassroomcolour=purple"
';
                $buffer .= $indent . '            class="styleswitch colour-purple"><img src="';
                $value = $this->resolveValue($context->findDot('config.wwwroot'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '/theme/klassroom/pix/purple-theme2.png"
';
                $buffer .= $indent . '            alt="purple" /></a></li>
';
                $buffer .= $indent . '         <div class="clearfix"></div>
';
                $buffer .= $indent . '      </ul>
';
                // 'colourswitcherdescription' section
                $value = $context->find('colourswitcherdescription');
                $buffer .= $this->section4ed59dfcec7a0e2c73b2aec9c25ac547($context, $indent, $value);
                $buffer .= $indent . '   </nav>
';
                $buffer .= $indent . '</div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

}
