rsync -av --progress --rsh='ssh -p 987' \
	tapas/ \
	andresva@andresvazquez.com.ar:/home/andresva/www/data/comercio-y-justicia/tapas/

ssh -p 987 andresva@andresvazquez.com.ar "find /home/andresva/www/data/comercio-y-justicia/tapas/ -name '*.php' -type f -exec chmod 644 {} \;"
