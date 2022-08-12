<?php
/*
  Copyright (C) ChaCha <web@cha-cha.ca>
 */

namespace CHACHA_GUTENBERG;

if (!defined('ABSPATH')) {
    exit;
}

abstract class FEATURE {

    protected function __construct() {

    }

    final public static function getInstance() {
        $class = get_called_class();
        return new $class;
    }

    final private function __clone() {
    }
}