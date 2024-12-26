<?php
require_once(dirname(__FILE__).'/header.php');
$bodyattributes = $OUTPUT->body_attributes($bodyclasses);
$blockspre = $OUTPUT->blocks('side-pre');
$blockspost = $OUTPUT->blocks('side-post');
$hassidepre = $PAGE->blocks->region_has_content('side-pre', $OUTPUT);
$hassidepost = $PAGE->blocks->region_has_content('side-post', $OUTPUT);
$templatecontext = [
'sitename' => format_string($SITE->shortname, true, ['context' => context_course::instance(SITEID), "escape" => false]),
'output' => $OUTPUT,
'sidepreblocks' => $blockspre,
'sidepostblocks' => $blockspost,
'haspreblocks' => $hassidepre,
'haspostblocks' => $hassidepost,
'bodyattributes' => $bodyattributes,
// Global
'favicon' => $favicon,
'hasfacebook' => $hasfacebook,
'hastwitter' => $hastwitter,
'hasgoogleplus' => $hasgoogleplus,
'haspinterest' => $haspinterest,
'hasinstagram' => $hasinstagram,
'hasyoutube' => $hasyoutube,
'hasflickr' => $hasflickr,
'haswhatsapp' => $haswhatsapp,
'hasskype' => $hasskype,
'hasgithub' => $hasgithub,
'contactnumber' => $contactnumber,
'logourl' => $logourl,
'applynow' => $applynow,
'applynowurl' => $applynowurl,    
'internalbannertagline' => $internalbannertagline,
// Colourswitcher
'displaycolourswitchersection' => $displaycolourswitchersection,
'colourswitcherheading' => $colourswitcherheading,
'colourswitchertagline' => $colourswitchertagline,
'colourswitcherdescription' => $colourswitcherdescription,
// Footer Section
'displayclientlogoarea' => $displayclientlogoarea,
'clientlogo1' => $clientlogo1,
'clientlogo2' => $clientlogo2,
'clientlogo3' => $clientlogo3,
'clientlogo4' => $clientlogo4,
'clientlogo5' => $clientlogo5,
'clientlogo6' => $clientlogo6,
'footerlogo' => $footerlogo,
'footersection1description' => $footersection1description,
'footersection2heading' => $footersection2heading,
'footersection2link1' => $footersection2link1,
'footersection2link1url' => $footersection2link1url,
'footersection2link2' => $footersection2link2,
'footersection2link2url' => $footersection2link2url,
'footersection2link3' => $footersection2link3,
'footersection2link3url' => $footersection2link3url,
'footersection2link4' => $footersection2link4,
'footersection2link4url' => $footersection2link4url,
'footersection2link5' => $footersection2link5,
'footersection2link5url' => $footersection2link5url,
'footersection3heading' => $footersection3heading,
'footersection3link1' => $footersection3link1,
'footersection3link1url' => $footersection3link1url,
'footersection3link2' => $footersection3link2,
'footersection3link2url' => $footersection3link2url,
'footersection3link3' => $footersection3link3,
'footersection3link3url' => $footersection3link3url,
'footersection3link4' => $footersection3link4,
'footersection3link4url' => $footersection3link4url,
'footersection3link5' => $footersection3link5,
'footersection3link5url' => $footersection3link5url,
'footersection4heading' => $footersection4heading,
'footersection4link1' => $footersection4link1,
'footersection4link1url' => $footersection4link1url,
'footersection4link2' => $footersection4link2,
'footersection4link2url' => $footersection4link2url,
'footersection4link3' => $footersection4link3,
'footersection4link3url' => $footersection4link3url,
'footersection4link4' => $footersection4link4,
'footersection4link4url' => $footersection4link4url,
'footersection4link5' => $footersection4link5,
'footersection4link5url' => $footersection4link5url,
'backtotop' => $backtotop,
];

echo $OUTPUT->render_from_template('theme_klassroom/columns', $templatecontext);
require_once(dirname(__FILE__).'/footer.php');
