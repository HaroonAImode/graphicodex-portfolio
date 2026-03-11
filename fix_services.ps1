$file = "pages\ai-services.tsx"
$content = [System.IO.File]::ReadAllText($file)
$marker1 = "  ], []);"
$marker2 = "const categories = ["
$i1 = $content.IndexOf($marker1)
$i2 = $content.IndexOf($marker2, $i1 + $marker1.Length)
if ($i2 -gt 0) {
    $cleaned = $content.Substring(0, $i1 + $marker1.Length) + "`r`n`r`n  " + $content.Substring($i2)
    [System.IO.File]::WriteAllText($file, $cleaned)
    Write-Host "SUCCESS: removed orphan block (was $($i2 - $i1 - $marker1.Length) chars)"
} else {
    Write-Host "ERROR: markers not found - i1=$i1 i2=$i2"
}
