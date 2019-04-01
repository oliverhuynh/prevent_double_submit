<?php

/**
 * Admin page
 */
function prevent_double_submit_admin_settings() {  
  $form['pds_mode'] = array(
    '#type' => 'textfield',
    '#title' => t('Mode'),
    '#default_value' => variable_get('pds_mode', 'include'),    
    '#description' => t('include/exclude'),
  );
  $form['pds_include_or_exclude'] = array(
    '#type' => 'textfield',
    '#title' => t('JQuery selector'),
    '#default_value' => variable_get('pds_include_or_exclude', '*'),    
    '#description' => t('JQuery selector to include/exclude forms. https://www.w3schools.com/jquery/jquery_ref_selectors.asp'),
  );   
  return system_settings_form($form);
}