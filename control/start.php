<?php
if (isset($_POST['type']) && ( $_POST['type'] == 'single' || $_POST['type'] == 'calib' || $_POST['type'] == 'auto' ))
{
	$tp=$_POST['type'];
    $hasstream = false;
    $st = 0;
    if (isset($_POST['stream']) && $_POST['stream'] != '' && $tp != 'auto')
    {
        $st = intval($_POST['stream']);
        if ($st > 0 && $st <= 46)
        {
            // switch stream
            $info = shell_exec("LD_LIBRARY_PATH=/bin/varian /bin/varian/MicroGCweb_new.exe -s 10.72.99.242 -V $st 2>/dev/null");
            echo "Switch to stream $st";
            $hasstream = true;
        }
    }

    if ($hasstream)
    {
        $info = shell_exec("LD_LIBRARY_PATH=/bin/varian /bin/varian/MicroGCweb_new.exe -s 10.72.99.242 -R $tp -v $st 2>/dev/null");
    }
    else
    {
        $info = shell_exec("LD_LIBRARY_PATH=/bin/varian /bin/varian/MicroGCweb_new.exe -s 10.72.99.242 -R $tp 2>/dev/null");
    }
    echo "Start $tp run.";
}
else
    echo "invalid argument";
?>
