<?php

class __Mustache_3140b282dbe6f07a70ae67f56c835622 extends Mustache_Template
{
    private $lambdaHelper;

    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $this->lambdaHelper = new Mustache_LambdaHelper($this->mustache, $context);
        $buffer = '';

        $buffer .= $indent . '<!-- Start Clients Logo section -->
';
        // 'displayclientlogoarea' section
        $value = $context->find('displayclientlogoarea');
        $buffer .= $this->sectionEaec8d0400e4a29594e35b10609df089($context, $indent, $value);
        $buffer .= $indent . '<!-- End Clients Logo section -->
';
        $buffer .= $indent . '<!-- Start Footer Section -->
';
        $buffer .= $indent . '<footer id="page-footer">
';
        $buffer .= $indent . '   <div class="container">
';
        $buffer .= $indent . '      <div class="row">
';
        $buffer .= $indent . '         <div class="col-lg-3 col-md-6 col-sm-12 footersection">
';
        $buffer .= $indent . '            <img class="footer-logo" src="';
        $value = $this->resolveValue($context->find('footerlogo'), $context);
        $buffer .= $value;
        $buffer .= '" alt="footer-logo" >
';
        // 'footersection1description' section
        $value = $context->find('footersection1description');
        $buffer .= $this->sectionF8b6277429a70d47f1c17afe7467808f($context, $indent, $value);
        $buffer .= $indent . '         </div>
';
        $buffer .= $indent . '         <div class="col-lg-3 col-md-6 col-sm-12 footersection">
';
        $buffer .= $indent . '            <ul>
';
        $buffer .= $indent . '               <li>
';
        // 'footersection2heading' section
        $value = $context->find('footersection2heading');
        $buffer .= $this->section285fa1b5ffd35ff35bfaf9995ce0b3af($context, $indent, $value);
        $buffer .= $indent . '                  <ul class="common">
';
        // 'footersection2link1' section
        $value = $context->find('footersection2link1');
        $buffer .= $this->section941e056cc1959673483217e0c9f57cf2($context, $indent, $value);
        // 'footersection2link2' section
        $value = $context->find('footersection2link2');
        $buffer .= $this->sectionB05de48a42dcab758a0d41c5ba081d2f($context, $indent, $value);
        // 'footersection2link3' section
        $value = $context->find('footersection2link3');
        $buffer .= $this->section63fe39d6e869ceb5a2ff11913cfef089($context, $indent, $value);
        // 'footersection2link4' section
        $value = $context->find('footersection2link4');
        $buffer .= $this->sectionBdeaa9ce5b16b3137d5366b119db5cbf($context, $indent, $value);
        // 'footersection2link5' section
        $value = $context->find('footersection2link5');
        $buffer .= $this->section1cb70edd0a68df5eeed779b2ae62628e($context, $indent, $value);
        $buffer .= $indent . '                  </ul>
';
        $buffer .= $indent . '               </li>
';
        $buffer .= $indent . '            </ul>
';
        $buffer .= $indent . '         </div>
';
        $buffer .= $indent . '         <div class="col-lg-3 col-md-6 col-sm-12 footersection">
';
        $buffer .= $indent . '            <ul>
';
        $buffer .= $indent . '               <li>
';
        // 'footersection3heading' section
        $value = $context->find('footersection3heading');
        $buffer .= $this->section0752a6fd77418b9b9222d5fdf28b2e14($context, $indent, $value);
        $buffer .= $indent . '                  <ul class="common">
';
        // 'footersection3link1' section
        $value = $context->find('footersection3link1');
        $buffer .= $this->section9b37cf4aa8ebb3ff191cf04371752a03($context, $indent, $value);
        // 'footersection3link2' section
        $value = $context->find('footersection3link2');
        $buffer .= $this->sectionC927190bbd3d442e9a4e80038bee19d0($context, $indent, $value);
        // 'footersection3link3' section
        $value = $context->find('footersection3link3');
        $buffer .= $this->sectionB1576fa021b5f77e02dc0f2fb667598f($context, $indent, $value);
        // 'footersection3link4' section
        $value = $context->find('footersection3link4');
        $buffer .= $this->section2ad9f2ad40c3673472ced96379de06e2($context, $indent, $value);
        // 'footersection3link5' section
        $value = $context->find('footersection3link5');
        $buffer .= $this->section22821404e295c7563984eccbcaf6a566($context, $indent, $value);
        $buffer .= $indent . '                  </ul>
';
        $buffer .= $indent . '               </li>
';
        $buffer .= $indent . '            </ul>
';
        $buffer .= $indent . '         </div>
';
        $buffer .= $indent . '         <div class="col-lg-3 col-md-6 col-sm-12 footersection">
';
        $buffer .= $indent . '            <ul>
';
        $buffer .= $indent . '               <li>
';
        // 'footersection4heading' section
        $value = $context->find('footersection4heading');
        $buffer .= $this->section5158efc252d8e757f1f7f6c87ebaa9f1($context, $indent, $value);
        $buffer .= $indent . '                  <ul class="common">
';
        // 'footersection4link1' section
        $value = $context->find('footersection4link1');
        $buffer .= $this->section064e379cd54d2f4e106e29e7edfab06f($context, $indent, $value);
        // 'footersection4link2' section
        $value = $context->find('footersection4link2');
        $buffer .= $this->sectionAe8986bcf4138f54fd3f7ea7d3c2e638($context, $indent, $value);
        // 'footersection4link3' section
        $value = $context->find('footersection4link3');
        $buffer .= $this->section3e604ff817b6285a25c41e60f56d91e4($context, $indent, $value);
        // 'footersection4link4' section
        $value = $context->find('footersection4link4');
        $buffer .= $this->section964e7ee35690357ffde98608db059319($context, $indent, $value);
        // 'footersection4link5' section
        $value = $context->find('footersection4link5');
        $buffer .= $this->section00443f1ba2a8d1f23344aa9f6f47c468($context, $indent, $value);
        $buffer .= $indent . '                  </ul>
';
        $buffer .= $indent . '               </li>
';
        $buffer .= $indent . '            </ul>
';
        $buffer .= $indent . '         </div>
';
        $buffer .= $indent . '         <div class="clearfix"></div>
';
        $buffer .= $indent . '      </div>
';
        $buffer .= $indent . '      <div class="bottom-footer">
';
        $buffer .= $indent . '         <div id="course-footer">';
        $value = $this->resolveValue($context->findDot('output.course_footer'), $context);
        $buffer .= $value;
        $buffer .= '</div>
';
        $buffer .= $indent . '         <!-- Start Custom Menu -->
';
        $buffer .= $indent . '         <nav class="nav navbar-nav d-md-none" aria-label="';
        // 'str' section
        $value = $context->find('str');
        $buffer .= $this->sectionB2d5335613e625f97c91fba6125c780d($context, $indent, $value);
        $buffer .= '">
';
        // 'output.custom_menu_flat' section
        $value = $context->findDot('output.custom_menu_flat');
        $buffer .= $this->section65dd07b8f08ffb1c91bb39a8a4d1b401($context, $indent, $value);
        $buffer .= $indent . '         </nav>
';
        $buffer .= $indent . '         <!-- End Custom Menu-->
';
        $buffer .= $indent . '         ';
        $value = $this->resolveValue($context->findDot('output.standard_footer_html'), $context);
        $buffer .= $value;
        $buffer .= '
';
        $buffer .= $indent . '         ';
        $value = $this->resolveValue($context->findDot('output.standard_end_of_body_html'), $context);
        $buffer .= $value;
        $buffer .= '
';
        $buffer .= $indent . '      </div>
';
        $buffer .= $indent . '      <!-- Start Back To Top -->
';
        // 'backtotop' section
        $value = $context->find('backtotop');
        $buffer .= $this->section9da7f849ddebbc7b892c1763b1eeed4b($context, $indent, $value);
        $buffer .= $indent . '      <!-- End Back To Top -->
';
        $buffer .= $indent . '   </div>
';
        $buffer .= $indent . '</footer>
';
        $buffer .= $indent . '<!-- End Footer Section -->
';

        return $buffer;
    }

    private function sectionEaec8d0400e4a29594e35b10609df089(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
<div class="clients-logo">
   <div class="container-fluid">
      <div class="row">
         <div class="col-lg-2 col-md-2 col-sm-12 logocl">
            <img src="{{{clientlogo1}}}" alt="client-logo-1" />
         </div>
         <div class="col-lg-2 col-md-2 col-sm-12 logocl">
            <img src="{{{clientlogo2}}}" alt="client-logo-2" />
         </div>
         <div class="col-lg-2 col-md-2 col-sm-12 logocl">
            <img src="{{{clientlogo3}}}" alt="client-logo-3" />
         </div>
         <div class="col-lg-2 col-md-2 col-sm-12 logocl">
            <img src="{{{clientlogo4}}}" alt="client-logo-4" />
         </div>
         <div class="col-lg-2 col-md-2 col-sm-12 logocl">
            <img src="{{{clientlogo5}}}" alt="client-logo-5" />
         </div>
         <div class="col-lg-2 col-md-2 col-sm-12 logocl">
            <img src="{{{clientlogo6}}}" alt="client-logo-6" />
         </div>
      </div>
   </div>
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
                
                $buffer .= $indent . '<div class="clients-logo">
';
                $buffer .= $indent . '   <div class="container-fluid">
';
                $buffer .= $indent . '      <div class="row">
';
                $buffer .= $indent . '         <div class="col-lg-2 col-md-2 col-sm-12 logocl">
';
                $buffer .= $indent . '            <img src="';
                $value = $this->resolveValue($context->find('clientlogo1'), $context);
                $buffer .= $value;
                $buffer .= '" alt="client-logo-1" />
';
                $buffer .= $indent . '         </div>
';
                $buffer .= $indent . '         <div class="col-lg-2 col-md-2 col-sm-12 logocl">
';
                $buffer .= $indent . '            <img src="';
                $value = $this->resolveValue($context->find('clientlogo2'), $context);
                $buffer .= $value;
                $buffer .= '" alt="client-logo-2" />
';
                $buffer .= $indent . '         </div>
';
                $buffer .= $indent . '         <div class="col-lg-2 col-md-2 col-sm-12 logocl">
';
                $buffer .= $indent . '            <img src="';
                $value = $this->resolveValue($context->find('clientlogo3'), $context);
                $buffer .= $value;
                $buffer .= '" alt="client-logo-3" />
';
                $buffer .= $indent . '         </div>
';
                $buffer .= $indent . '         <div class="col-lg-2 col-md-2 col-sm-12 logocl">
';
                $buffer .= $indent . '            <img src="';
                $value = $this->resolveValue($context->find('clientlogo4'), $context);
                $buffer .= $value;
                $buffer .= '" alt="client-logo-4" />
';
                $buffer .= $indent . '         </div>
';
                $buffer .= $indent . '         <div class="col-lg-2 col-md-2 col-sm-12 logocl">
';
                $buffer .= $indent . '            <img src="';
                $value = $this->resolveValue($context->find('clientlogo5'), $context);
                $buffer .= $value;
                $buffer .= '" alt="client-logo-5" />
';
                $buffer .= $indent . '         </div>
';
                $buffer .= $indent . '         <div class="col-lg-2 col-md-2 col-sm-12 logocl">
';
                $buffer .= $indent . '            <img src="';
                $value = $this->resolveValue($context->find('clientlogo6'), $context);
                $buffer .= $value;
                $buffer .= '" alt="client-logo-6" />
';
                $buffer .= $indent . '         </div>
';
                $buffer .= $indent . '      </div>
';
                $buffer .= $indent . '   </div>
';
                $buffer .= $indent . '</div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionF8b6277429a70d47f1c17afe7467808f(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <p>{{{footersection1description}}}</p>
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
                
                $buffer .= $indent . '            <p>';
                $value = $this->resolveValue($context->find('footersection1description'), $context);
                $buffer .= $value;
                $buffer .= '</p>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section285fa1b5ffd35ff35bfaf9995ce0b3af(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                  <h5>{{{footersection2heading}}}</h5>
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
                
                $buffer .= $indent . '                  <h5>';
                $value = $this->resolveValue($context->find('footersection2heading'), $context);
                $buffer .= $value;
                $buffer .= '</h5>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section941e056cc1959673483217e0c9f57cf2(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection2link1url}}}">{{{footersection2link1}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection2link1url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection2link1'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionB05de48a42dcab758a0d41c5ba081d2f(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection2link2url}}}">{{{footersection2link2}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection2link2url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection2link2'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section63fe39d6e869ceb5a2ff11913cfef089(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection2link3url}}}">{{{footersection2link3}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection2link3url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection2link3'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionBdeaa9ce5b16b3137d5366b119db5cbf(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection2link4url}}}">{{{footersection2link4}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection2link4url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection2link4'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section1cb70edd0a68df5eeed779b2ae62628e(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection2link5url}}}">{{{footersection2link5}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection2link5url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection2link5'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section0752a6fd77418b9b9222d5fdf28b2e14(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                  <h5>{{{footersection3heading}}}</h5>
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
                
                $buffer .= $indent . '                  <h5>';
                $value = $this->resolveValue($context->find('footersection3heading'), $context);
                $buffer .= $value;
                $buffer .= '</h5>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section9b37cf4aa8ebb3ff191cf04371752a03(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection3link1url}}}">{{{footersection3link1}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection3link1url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection3link1'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionC927190bbd3d442e9a4e80038bee19d0(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection3link2url}}}">{{{footersection3link2}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection3link2url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection3link2'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionB1576fa021b5f77e02dc0f2fb667598f(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection3link3url}}}">{{{footersection3link3}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection3link3url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection3link3'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section2ad9f2ad40c3673472ced96379de06e2(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection3link4url}}}">{{{footersection3link4}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection3link4url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection3link4'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section22821404e295c7563984eccbcaf6a566(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection3link5url}}}">{{{footersection3link5}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection3link5url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection3link5'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section5158efc252d8e757f1f7f6c87ebaa9f1(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                  <h5>{{{footersection4heading}}}</h5>
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
                
                $buffer .= $indent . '                  <h5>';
                $value = $this->resolveValue($context->find('footersection4heading'), $context);
                $buffer .= $value;
                $buffer .= '</h5>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section064e379cd54d2f4e106e29e7edfab06f(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection4link1url}}}">{{{footersection4link1}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection4link1url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection4link1'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionAe8986bcf4138f54fd3f7ea7d3c2e638(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection4link2url}}}">{{{footersection4link2}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection4link2url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection4link2'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section3e604ff817b6285a25c41e60f56d91e4(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection4link3url}}}">{{{footersection4link3}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection4link3url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection4link3'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section964e7ee35690357ffde98608db059319(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection4link4url}}}">{{{footersection4link4}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection4link4url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection4link4'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section00443f1ba2a8d1f23344aa9f6f47c468(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                     <li><a href="{{{footersection4link5url}}}">{{{footersection4link5}}}</a></li>
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
                
                $buffer .= $indent . '                     <li><a href="';
                $value = $this->resolveValue($context->find('footersection4link5url'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('footersection4link5'), $context);
                $buffer .= $value;
                $buffer .= '</a></li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionB2d5335613e625f97c91fba6125c780d(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'custommenu, admin';
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
                
                $buffer .= 'custommenu, admin';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section65dd07b8f08ffb1c91bb39a8a4d1b401(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <ul class="list-unstyled pt-3">
               {{> theme_boost/custom_menu_footer }}
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
                
                $buffer .= $indent . '            <ul class="list-unstyled pt-3">
';
                if ($partial = $this->mustache->loadPartial('theme_boost/custom_menu_footer')) {
                    $buffer .= $partial->renderInternal($context, $indent . '               ');
                }
                $buffer .= $indent . '            </ul>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section9da7f849ddebbc7b892c1763b1eeed4b(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
      <div id="backtotop" style="display: none;"> 
         <a class="scrollup" href="javascript:void(0);" title="Go to top">
         </a>
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
                
                $buffer .= $indent . '      <div id="backtotop" style="display: none;"> 
';
                $buffer .= $indent . '         <a class="scrollup" href="javascript:void(0);" title="Go to top">
';
                $buffer .= $indent . '         </a>
';
                $buffer .= $indent . '      </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

}
