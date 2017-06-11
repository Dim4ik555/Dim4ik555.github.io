<?php
  function searchFiles($dir, $search) {
    $files = glob($dir."/*.html");
    $results = array();
    for ($i = 0; $i < count($files); $i++) {
      $str = strip_tags(file_get_contents($files[$i]));
      $count = substr_count($str, $search);
      if ($count) $results[$files[$i]] = $count;
    }
    return $results;
  }
  $results = searchFiles(".", "fly_iq4405_quad_black");
  print_r($results);
?>