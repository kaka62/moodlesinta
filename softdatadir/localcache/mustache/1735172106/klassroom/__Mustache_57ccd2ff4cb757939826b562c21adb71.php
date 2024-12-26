<?php

class __Mustache_57ccd2ff4cb757939826b562c21adb71 extends Mustache_Template
{
    private $lambdaHelper;

    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $this->lambdaHelper = new Mustache_LambdaHelper($this->mustache, $context);
        $buffer = '';

        $buffer .= $indent . '<div class="top-header">
';
        $buffer .= $indent . '   <div class="container">
';
        $buffer .= $indent . '      <div class="row">
';
        $buffer .= $indent . '         <ul class="top-left col-lg-6 col-md-6 col-sm-12">
';
        // 'hasfacebook' section
        $value = $context->find('hasfacebook');
        $buffer .= $this->sectionFd5a0cff0e8c299592f0094fbcb66b4e($context, $indent, $value);
        // 'hastwitter' section
        $value = $context->find('hastwitter');
        $buffer .= $this->section5e7c0f2c6b46330c4a8a5c08f2dfac43($context, $indent, $value);
        // 'hasgoogleplus' section
        $value = $context->find('hasgoogleplus');
        $buffer .= $this->sectionF6b1c0e31bc0a1dc0b929bec22d72182($context, $indent, $value);
        // 'haspinterest' section
        $value = $context->find('haspinterest');
        $buffer .= $this->sectionF9a2a1bd8db8f483a14020ba5e9951c4($context, $indent, $value);
        // 'hasinstagram' section
        $value = $context->find('hasinstagram');
        $buffer .= $this->sectionB1e64ecbf720a016bc1845c519edfab7($context, $indent, $value);
        // 'hasyoutube' section
        $value = $context->find('hasyoutube');
        $buffer .= $this->section91ce7e0cf8f2acacdd14367dcd69c1a7($context, $indent, $value);
        // 'hasflickr' section
        $value = $context->find('hasflickr');
        $buffer .= $this->sectionFd2b0435615264bc1296142e862d740b($context, $indent, $value);
        // 'haswhatsapp' section
        $value = $context->find('haswhatsapp');
        $buffer .= $this->section16bf2980eedf6cc124511c72847a3f83($context, $indent, $value);
        // 'hasskype' section
        $value = $context->find('hasskype');
        $buffer .= $this->sectionB4da1b15e5917b75eb9a8bdbd4e8106d($context, $indent, $value);
        // 'hasgithub' section
        $value = $context->find('hasgithub');
        $buffer .= $this->section1cfa023cbd84b5037350c69a24481df4($context, $indent, $value);
        $buffer .= $indent . '         </ul>
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '             <ul class="top-right col-lg-6 col-md-6 col-sm-12">
';
        $buffer .= $indent . '               
';
        $buffer .= $indent . '                <li class="nav-item d-flex">
';
        if ($partial = $this->mustache->loadPartial('theme_klassroom/reg')) {
            $buffer .= $partial->renderInternal($context, $indent . '                  ');
        }
        $buffer .= $indent . '                  ';
        $value = $this->resolveValue($context->findDot('output.user_menu'), $context);
        $buffer .= $value;
        $buffer .= '
';
        $buffer .= $indent . '               </li>
';
        $buffer .= $indent . '               <li class="nav-item">
';
        $buffer .= $indent . '               ';
        $value = $this->resolveValue($context->findDot('output.navbar_plugin_output'), $context);
        $buffer .= $value;
        $buffer .= '
';
        $buffer .= $indent . '            </li>
';
        // 'contactnumber' section
        $value = $context->find('contactnumber');
        $buffer .= $this->section66871d9f8c2c87e3bc4df7a384a4d162($context, $indent, $value);
        $buffer .= $indent . '               
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '            </ul> 
';
        $buffer .= $indent . '      </div>
';
        $buffer .= $indent . '   </div>
';
        $buffer .= $indent . '</div>
';
        $buffer .= $indent . '<div class="fixed-nav-element"></div>
';
        $buffer .= $indent . '<div id="nav-main" class="top-page-header">
';
        $buffer .= $indent . '   <div class="container">
';
        $buffer .= $indent . '      <div class="float-left"><a class="logo" href="';
        $value = $this->resolveValue($context->findDot('config.wwwroot'), $context);
        $buffer .= $value;
        $buffer .= '"><img src="';
        $value = $this->resolveValue($context->find('logourl'), $context);
        $buffer .= $value;
        $buffer .= '" alt="logo"></a></div>
';
        $buffer .= $indent . '      <nav class="navbar navbar-bootswatch navbar-expand moodle-has-zindex float-right">
';
        $buffer .= $indent . '         <a href="';
        $value = $this->resolveValue($context->findDot('config.wwwroot'), $context);
        $buffer .= $value;
        $buffer .= '" class="navbar-brand ';
        // 'output.should_display_navbar_logo' section
        $value = $context->findDot('output.should_display_navbar_logo');
        $buffer .= $this->sectionE1b7734efa381e40cb6792ff2d8c4194($context, $indent, $value);
        $buffer .= '
';
        // 'output.should_display_navbar_logo' inverted section
        $value = $context->findDot('output.should_display_navbar_logo');
        if (empty($value)) {
            
            $buffer .= $indent . '            d-none d-sm-inline
';
        }
        $buffer .= $indent . '            ">
';
        // 'output.should_display_navbar_logo' section
        $value = $context->findDot('output.should_display_navbar_logo');
        $buffer .= $this->section6b1cbac235d828f851866f983522f534($context, $indent, $value);
        $buffer .= $indent . '         <span class="site-name d-none d-md-inline">';
        $value = $this->resolveValue($context->find('sitename'), $context);
        $buffer .= $value;
        $buffer .= '</span>
';
        $buffer .= $indent . '         </a>
';
        $buffer .= $indent . '         <a class="show-menu" href="#"><i class="fa fa-bars"></i></a>
';
        $buffer .= $indent . '         <ul class="pull-left navigation-wrapper">
';
        $buffer .= $indent . '            <!-- custom_menu -->
';
        $buffer .= $indent . '            ';
        $value = $this->resolveValue($context->findDot('output.custom_menu'), $context);
        $buffer .= $value;
        $buffer .= '
';
        $buffer .= $indent . '            <!-- page_heading_menu -->
';
        $buffer .= $indent . '            ';
        $value = $this->resolveValue($context->findDot('output.page_heading_menu'), $context);
        $buffer .= $value;
        $buffer .= '
';
        $buffer .= $indent . '         </ul>
';
        $buffer .= $indent . '         
';
        // 'applynow' section
        $value = $context->find('applynow');
        $buffer .= $this->section2249de7c262102852e981b251572f891($context, $indent, $value);
        $buffer .= $indent . '      </nav>
';
        $buffer .= $indent . '      <div class="clearfix"></div>
';
        $buffer .= $indent . '   </div>
';
        $buffer .= $indent . '</div>
';
        if ($partial = $this->mustache->loadPartial('theme_klassroom/colourswitcher')) {
            $buffer .= $partial->renderInternal($context);
        }

        return $buffer;
    }

    private function sectionFd5a0cff0e8c299592f0094fbcb66b4e(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <li>
               <a href="{{{hasfacebook}}}" target="_blank">
               <i class="fa fa-facebook"></i>
               </a>
            </li>
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
                
                $buffer .= $indent . '            <li>
';
                $buffer .= $indent . '               <a href="';
                $value = $this->resolveValue($context->find('hasfacebook'), $context);
                $buffer .= $value;
                $buffer .= '" target="_blank">
';
                $buffer .= $indent . '               <i class="fa fa-facebook"></i>
';
                $buffer .= $indent . '               </a>
';
                $buffer .= $indent . '            </li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section5e7c0f2c6b46330c4a8a5c08f2dfac43(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <li>
               <a href="{{{hastwitter}}}" target="_blank">
               <i class="fa fa-twitter"></i>
               </a>
            </li>
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
                
                $buffer .= $indent . '            <li>
';
                $buffer .= $indent . '               <a href="';
                $value = $this->resolveValue($context->find('hastwitter'), $context);
                $buffer .= $value;
                $buffer .= '" target="_blank">
';
                $buffer .= $indent . '               <i class="fa fa-twitter"></i>
';
                $buffer .= $indent . '               </a>
';
                $buffer .= $indent . '            </li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionF6b1c0e31bc0a1dc0b929bec22d72182(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <li>
               <a href="{{{hasgoogleplus}}}" target="_blank">
               <i class="fa fa-google-plus"></i>
               </a>
            </li>
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
                
                $buffer .= $indent . '            <li>
';
                $buffer .= $indent . '               <a href="';
                $value = $this->resolveValue($context->find('hasgoogleplus'), $context);
                $buffer .= $value;
                $buffer .= '" target="_blank">
';
                $buffer .= $indent . '               <i class="fa fa-google-plus"></i>
';
                $buffer .= $indent . '               </a>
';
                $buffer .= $indent . '            </li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionF9a2a1bd8db8f483a14020ba5e9951c4(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <li>
               <a href="{{{haspinterest}}}" target="_blank">
               <i class="fa fa-pinterest"></i>
               </a>
            </li>
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
                
                $buffer .= $indent . '            <li>
';
                $buffer .= $indent . '               <a href="';
                $value = $this->resolveValue($context->find('haspinterest'), $context);
                $buffer .= $value;
                $buffer .= '" target="_blank">
';
                $buffer .= $indent . '               <i class="fa fa-pinterest"></i>
';
                $buffer .= $indent . '               </a>
';
                $buffer .= $indent . '            </li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionB1e64ecbf720a016bc1845c519edfab7(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <li>
               <a href="{{{hasinstagram}}}" target="_blank">
               <i class="fa fa-instagram"></i>
               </a>
            </li>
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
                
                $buffer .= $indent . '            <li>
';
                $buffer .= $indent . '               <a href="';
                $value = $this->resolveValue($context->find('hasinstagram'), $context);
                $buffer .= $value;
                $buffer .= '" target="_blank">
';
                $buffer .= $indent . '               <i class="fa fa-instagram"></i>
';
                $buffer .= $indent . '               </a>
';
                $buffer .= $indent . '            </li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section91ce7e0cf8f2acacdd14367dcd69c1a7(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <li>
               <a href="{{{hasyoutube}}}" target="_blank">
               <i class="fa fa-youtube"></i>
               </a>
            </li>
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
                
                $buffer .= $indent . '            <li>
';
                $buffer .= $indent . '               <a href="';
                $value = $this->resolveValue($context->find('hasyoutube'), $context);
                $buffer .= $value;
                $buffer .= '" target="_blank">
';
                $buffer .= $indent . '               <i class="fa fa-youtube"></i>
';
                $buffer .= $indent . '               </a>
';
                $buffer .= $indent . '            </li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionFd2b0435615264bc1296142e862d740b(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <li>
               <a href="{{{hasflickr}}}" target="_blank">
               <i class="fa fa-flickr"></i>
               </a>
            </li>
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
                
                $buffer .= $indent . '            <li>
';
                $buffer .= $indent . '               <a href="';
                $value = $this->resolveValue($context->find('hasflickr'), $context);
                $buffer .= $value;
                $buffer .= '" target="_blank">
';
                $buffer .= $indent . '               <i class="fa fa-flickr"></i>
';
                $buffer .= $indent . '               </a>
';
                $buffer .= $indent . '            </li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section16bf2980eedf6cc124511c72847a3f83(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <li>
               <a href="{{{haswhatsapp}}}" target="_blank">
               <i class="fa fa-whatsapp"></i>
               </a>
            </li>
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
                
                $buffer .= $indent . '            <li>
';
                $buffer .= $indent . '               <a href="';
                $value = $this->resolveValue($context->find('haswhatsapp'), $context);
                $buffer .= $value;
                $buffer .= '" target="_blank">
';
                $buffer .= $indent . '               <i class="fa fa-whatsapp"></i>
';
                $buffer .= $indent . '               </a>
';
                $buffer .= $indent . '            </li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionB4da1b15e5917b75eb9a8bdbd4e8106d(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <li>
               <a href="{{{hasskype}}}" target="_blank">
               <i class="fa fa-skype"></i>
               </a>
            </li>
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
                
                $buffer .= $indent . '            <li>
';
                $buffer .= $indent . '               <a href="';
                $value = $this->resolveValue($context->find('hasskype'), $context);
                $buffer .= $value;
                $buffer .= '" target="_blank">
';
                $buffer .= $indent . '               <i class="fa fa-skype"></i>
';
                $buffer .= $indent . '               </a>
';
                $buffer .= $indent . '            </li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section1cfa023cbd84b5037350c69a24481df4(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <li>
               <a href="{{{hasgithub}}}" target="_blank">
               <i class="fa fa-github"></i>
               </a>
            </li>
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
                
                $buffer .= $indent . '            <li>
';
                $buffer .= $indent . '               <a href="';
                $value = $this->resolveValue($context->find('hasgithub'), $context);
                $buffer .= $value;
                $buffer .= '" target="_blank">
';
                $buffer .= $indent . '               <i class="fa fa-github"></i>
';
                $buffer .= $indent . '               </a>
';
                $buffer .= $indent . '            </li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section66871d9f8c2c87e3bc4df7a384a4d162(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
               <li class="contact"><a href="tel:{{{contactnumber}}}"><i class="fa fa-phone" aria-hidden="true"></i>{{{contactnumber}}}</a></li>
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
                
                $buffer .= $indent . '               <li class="contact"><a href="tel:';
                $value = $this->resolveValue($context->find('contactnumber'), $context);
                $buffer .= $value;
                $buffer .= '"><i class="fa fa-phone" aria-hidden="true"></i>';
                $value = $this->resolveValue($context->find('contactnumber'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionE1b7734efa381e40cb6792ff2d8c4194(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'has-logo';
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
                
                $buffer .= 'has-logo';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section6b1cbac235d828f851866f983522f534(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
         <span class="logo d-none d-sm-inline">
         <img src="{{output.get_compact_logo_url}}" alt="{{sitename}}">
         </span>
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
                
                $buffer .= $indent . '         <span class="logo d-none d-sm-inline">
';
                $buffer .= $indent . '         <img src="';
                $value = $this->resolveValue($context->findDot('output.get_compact_logo_url'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '" alt="';
                $value = $this->resolveValue($context->find('sitename'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '">
';
                $buffer .= $indent . '         </span>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section2249de7c262102852e981b251572f891(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <ul class="pull-right apply">
               <li>
                  <a href="{{{applynowurl}}}" class="btn">
                  {{{applynow}}}
                  </a>    
               </li>
            </ul>
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
                
                $buffer .= $indent . '            <ul class="pull-right apply">
';
                $buffer .= $indent . '               <li>
';
                $buffer .= $indent . '                  <a href="';
                $value = $this->resolveValue($context->find('applynowurl'), $context);
                $buffer .= $value;
                $buffer .= '" class="btn">
';
                $buffer .= $indent . '                  ';
                $value = $this->resolveValue($context->find('applynow'), $context);
                $buffer .= $value;
                $buffer .= '
';
                $buffer .= $indent . '                  </a>    
';
                $buffer .= $indent . '               </li>
';
                $buffer .= $indent . '            </ul>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

}
