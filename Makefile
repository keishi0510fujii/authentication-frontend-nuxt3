setup:
	@TARGET=base TAG=setup docker-compose build
	@docker run --name authentication_frontend_nuxt3 -itd authentication_frontend_nuxt3:setup
	@docker cp -a authentication_frontend_nuxt3:/app/node_modules ./app/
	@docker cp -a authentication_frontend_nuxt3:/app/.nuxt ./app/
	@docker stop authentication_frontend_nuxt3 && docker rm authentication_frontend_nuxt3
	@docker rmi -f authentication_frontend_nuxt3:setup

IMAGES=`docker images 'authentication_frontend_nuxt3*' -q`
destroy:
	@if [ "$(IMAGES)" != "" ] ; then \
		docker rmi -f `docker images 'authentication_frontend_nuxt3' -q`; \
	else \
		echo 'no images "authentication_frontend_nuxt3"'; \
	fi
	@rm -rf ./app/node_modules ./app/.nuxt
	@docker builder prune -f

build:
	@docker-compose build
up:
	@docker-compose up -d
down:
	@docker-compose down
clean:
	@docker rmi -f `docker images 'authentication_frontend_nuxt3*' -q`