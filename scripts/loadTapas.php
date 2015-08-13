<?php
set_time_limit(0);
ini_set("memory_limit", "3000M");

//$empieza = "2010-03-11";
$empieza = (isset($_GET["empieza"])) ? $_GET["empieza"] : date("Y-m-d");
$traer = (isset($_GET["traer"])) ? $_GET["traer"] : 1;

# clean params
if (! is_numeric($traer)) {exit('PARAM ERROR');}
$emps = explode('-', $empieza);
foreach ($emps as $num) {
    if (! is_numeric($num)) {exit('PARAM ERROR');}
}

echo "<br/>Traer $traer diarios de comercio y justicia desde $empieza";

$basePath = "http://comercioyjusticia.info/wp-content/uploads/pdfs/";
$baseFiles = "/home/andresva/public_html/data/comercio-y-justicia/tapas/";

for ($trae = 0; $trae < $traer; $trae++)
    {
    
    flush();
    
    $dia = date("Y-m-d", strtotime("$empieza +$trae day"));
    
    if ($dia > date("Y-m-d")) 
        {
        exit("<br/>NO LEEMOS EL FUTURO");
        }
    
    $dow = date("w", strtotime($dia));
    if ($dow == 0 || $dow == 6) 
        {
        echo "<br/>Se omite por ser sabado o domingo, no publica";
        continue;
        }
    
    echo "<br/>Traeyendo <b>$dia</b>";
    
    //continue;//solo los diarios completos    
    
    $pdf_file = $baseFiles . "tapa-comercio-y-justicia-$dia.pdf";
    
    if(!file_exists($pdf_file) || filesize($pdf_file) < 35000)
        {
        echo "<br/>No existia la tapa <b>$pdf_file</b>";
        //$original_file = "http://www.comercioyjusticia.com.ar/upload_files/tapas/TA-$dia.pdf";
        $original_file = $basePath . "tapas/TA-$dia.pdf";
        echo "<br/>Busco entonces la tapa <b>$original_file</b>";
        
        $ch = curl_init($original_file);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $data = curl_exec($ch);
        curl_close($ch);

        $f1 = file_put_contents($pdf_file, $data);
        
        if (!$f1) 
            {
            echo "<br/>FALLAMOS AL TRAER ($original_file) ($f1)";
            }
        
        }
    else {echo "<br/>Ya estaba $pdf_file";}
        
    if (file_exists($pdf_file) &&  filesize($pdf_file) > 35000)
        {
        $jpg_file1 = $baseFiles . "tapa-comercio-y-justicia-$dia.jpg";
        $jpg_file2 = $baseFiles . "tapa-comercio-y-justicia-$dia-thumb.jpg";
        $jpg_file3 = $baseFiles . "tapa-comercio-y-justicia-$dia-thumb-mini.jpg";

        $j1 = escapeshellarg( $jpg_file1 );
        $j2 = escapeshellarg( $jpg_file2 );
        $j3 = escapeshellarg( $jpg_file3 );

        $result = 0;
        $out = "";
        $pdff = escapeshellarg($pdf_file);
        if (!file_exists($jpg_file1)) 
            {
            exec( "convert -density 84 {$pdff} {$j1}", $out, $result );
            echo "<br/>generando <b>$jpg_file1</b> [$result] [<pre>".print_r($out, true)."</pre>]";
            }
        else {echo "<br/>Ya estaba $jpg_file1";}

        if (!file_exists($jpg_file2)) 
            {
            exec( "convert -size 500x500 {$j1} -resize 500x500 +profile '*' {$j2}", $out, $result );
            echo "<br/>generando <b>$jpg_file2</b> [$result] [<pre>".print_r($out, true)."</pre>]";
            }
        else {echo "<br/>Ya estaba $jpg_file2";}

        if (!file_exists($jpg_file3)) 
            {
            exec( "convert -size 150x150 {$j2} -resize 150x150 +profile '*' {$j3}", $out, $result );
            echo "<br/>generando <b>$jpg_file2</b> [$result] [<pre>".print_r($out, true)."</pre>]";
            }
        else {echo "<br/>Ya estaba $jpg_file3";}
        }
    else 
        {echo "<br/>O no estaba la tapa o era una verison mala";}
        
    echo "<hr>";    
    }
    
    echo "<br/>FIN";
?>
