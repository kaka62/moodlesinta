<?php
namespace theme_klassroom\privacy;
defined('MOODLE_INTERNAL') || die();
class provider implements \core_privacy\local\metadata\null_provider {
public static function get_reason() : string {
return 'privacy:metadata';
}
}
