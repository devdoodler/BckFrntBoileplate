# Use the official PHP image
FROM php:8.3-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    libicu-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    unzip \
    git \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql zip \
    && apt-get clean

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/symfony

# Copy Symfony app files into the container
COPY . /var/www/symfony

# Install Symfony dependencies
RUN composer install

# Expose port
EXPOSE 9000

# Command to run the Symfony app
CMD ["php-fpm"]
