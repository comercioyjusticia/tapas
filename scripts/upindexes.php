<?php
# update indexes
# existe un dia cargado en octubre de 1939 y luego comienza desde julio de 2008

$baseFiles = "/home/andresva/public_html/data/comercio-y-justicia/tapas/";

$res = array(1939=>array(10=>['02'])); # a mano el primer día
$mesesStr = []; # lista de todos los meses "activos"

for ($anio = 2008; $anio <= 2016; $anio++) {
	$res[$anio] = [];
	for ($mes=1; $mes<=12; $mes++){
		$smes = ($mes<1) ? '0' . $mes : $mes;
		$res[$anio][$smes] = [];
		for ($dia=1; $dia<=31; $dia++){
			$diaStr = date("Y-m-d", mktime(0, 0, 0, $mes, $dia, $anio));
			$diaSoloStr = date("d", mktime(0, 0, 0, $mes, $dia, $anio));
			
			$este = $baseFiles . "tapa-comercio-y-justicia-$diaStr-thumb.jpg";

	    	if(file_exists($este)){ $res[$anio][$smes][] = $diaSoloStr; }
	    }
		# remove moth if empty
		$esteMes = $res[$anio][$smes];
		echo '<br/>largo ' . $anio . ' ' . $smes . ' = ' . count($esteMes);
	    if (count($esteMes) == 0) { 
	    	echo "<br/>delete ".$anio.' '.$smes; 
	    	unset($res[$anio][$smes]); }
		    
	}
    # remove year if empty
	if (count($res[$anio]) == 0) {
		echo "<br/>delete ".$anio; 
		unset($res[$anio]);
	}
	
} 

$jres = json_encode($res);
echo $jres;

$f = fopen($baseFiles . "map.json", "w");
fwrite($f, $jres);
fclose($f);

?>
