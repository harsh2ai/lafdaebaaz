#!/bin/bash

# Configuration
REPO_URL="git@github.com:yourusername/lattice.git"
DEPLOY_PATH="/var/www/lattice"
NGINX_CONF="/etc/nginx/sites-available/lattice"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

# Error handling
set -e
trap 'echo -e "${RED}Error: Command failed${NC}"; exit 1' ERR

echo -e "${GREEN}Starting deployment...${NC}"

# Update repository
if [ -d "$DEPLOY_PATH" ]; then
    echo "Pulling latest changes..."
    cd $DEPLOY_PATH
    git pull origin main
else
    echo "Cloning repository..."
    git clone $REPO_URL $DEPLOY_PATH
    cd $DEPLOY_PATH
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building application..."
npm run build

# Setup Nginx if not already configured
if [ ! -f "$NGINX_CONF" ]; then
    echo "Setting up Nginx configuration..."
    sudo cp nginx.conf $NGINX_CONF
    sudo ln -s $NGINX_CONF /etc/nginx/sites-enabled/
fi

# Test Nginx configuration
echo "Testing Nginx configuration..."
sudo nginx -t

# Reload Nginx
echo "Reloading Nginx..."
sudo systemctl reload nginx

echo -e "${GREEN}Deployment completed successfully!${NC}"