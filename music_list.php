<?php>
$data = [
    ["artist_name"=> "Tuna","Olam Mesuga"=>"פשוטים", "id"=>"04Xu9eiqeGU"],
    ["artist_name"=> "Full Trunk","name"=>"As A Stone", "id"=>"JjWTzszLv_U"],
    ["artist_name"=> "שרית חדד","name"=>"אולי עוד קצת ביחד", "id"=>"ai0lPw-Wqf4"],
    ["artist_name"=> "אביהו פנחסוב","name"=>"את מצילה אותי", "id"=>"q83Lq_fQXE4"],
    ["artist_name"=> "מרסדס-בנד","name"=>"דאווינים", "id"=>"CTmD4kDG4k0"],
    ];
header('Content-Type: application/json');
echo json_encode($data);