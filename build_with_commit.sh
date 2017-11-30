#!/usr/bin/env bash

# JEKYLL_ENV=production bundle exec jekyll build
bundle exec jekyll build

sass assets/css/main.scss:assets/css/main.css
rm -rf .sass-cache
source build_config.sh

# goto destination - delete all apart from git.

if [ -d ${dest} ] && [ -n "$1" ]; then
    echo "====="
    echo $dest
    echo $1
    echo "====="

    # Move to the output directory
    cd $dest

    # Remove everything from $dest apart from the .git folder
    ls -a | grep -v ".git" | tail -n +3 |xargs rm -rf


    # Move back to the original directory.
    cd -

    # Now, back in the original directory.
    # Copy site output to destination
    cp -r  ./_site/* $dest


    cd $dest
    git add -A
    git commit -m "Updated site. $1"


fi
