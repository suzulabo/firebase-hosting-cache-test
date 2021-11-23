while true
do
  curl -I --no-keepalive https://hosting-cache-test.web.app/functions404
  curl -I --no-keepalive https://hosting-cache-test.web.app/functions404_max-age
  curl -I --no-keepalive https://hosting-cache-test.web.app/functions404_smax-age
  date
  sleep 30
done
