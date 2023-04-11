RABBİTMQ KURULUM

    1.adım : sudo apt-get update
    
    2.adım : sudo apt upgrade
    
    3.adım : sudo apt install erlang
    
    4.adım : wget -O - https://github.com/rabbitmq/signing-keys/releases/download/2.0/rabbitmq-release-signing-key.asc | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/rabbitmq.gpg
    
    5.adım: sudo sh -c 'echo "deb https://github.com/rabbitmq/debian/releases/download/v3.9.11-1/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/rabbitmq.list'
    
    6.adım: sudo apt update
    
    7.adım: sudo apt install rabbitmq-server
    
    8.adım: sudo systemctl start rabbitmq-server
    
    9.adım: sudo systemctl enable rabbitmq-server(start olmazsa 10 ve 11.adım)
    
    10.adım: sudo systemctl disable rabbitmq-server
    
    11.adım: sudo rm /etc/init.d/rabbitmq-server
    
    12.adım: sudo systemctl daemon-reload
    
    13.adım: sudo systemctl start rabbitmq-server
    
    14.adım: sudo systemctl enable rabbitmq-server
    
    15.adım: sudo systemctl start rabbitmq-server
    
    16.adım: sudo systemctl status rabbitmq-server
    
    17.adım: sudo rabbitmqctl add_user admin mypassword (ŞİFRE-KULLANICIADI)
    
    18.adım: sudo rabbitmqctl set_user_tags admin administrator
    
    19.adım: sudo rabbitmqctl set_permissions -p / admin ".*" ".*" ".*"
    
    20.adım: sudo systemctl start rabbitmq-server
    
    21.adım: sudo systemctl enable rabbitmq-server
    
    22.adım: sudo rabbitmq-plugins enable rabbitmq_management(izinler sağlanmazsa açmaz portu önemli)
    
    23.adım: sudo systemctl restart rabbitmq-server
    
    [http://localhost:15672/](http://localhost:15672/)

*Rabbitmq mesaj kuyruğu sistemidir. Proje de basit bir şekilde post işlemi gerçekleştirdik bunun için localhost:5000/create adresine body'e email ekleyerek gönderdik.Publisher da hangi kuyruğa gönderileceği kriterler belirtilmiştir.Consumer da ise kuyruğa alınan veriler geliyor ve belli bir süre sonra siliniyor .Message queue ile veri kaybını önleme ve kullanıcıyı bekletmemek amaçlanmaktadır.*


**2 terminal ile çalışıyoruz birisi node ./app.js 2.terminal ise node ./consumer.js** 
