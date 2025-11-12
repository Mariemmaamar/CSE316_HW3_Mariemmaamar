FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html

# ✅ Corrige les extensions d’images une fois pour toutes
RUN if [ -d "/usr/share/nginx/html/ProductImages" ]; then \
      cd /usr/share/nginx/html/ProductImages && \
      for f in *.jpeg; do \
        mv "$f" "$(basename "$f" .jpeg).JPEG"; \
      done; \
    fi

EXPOSE 80
