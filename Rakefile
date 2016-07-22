require 'rubygems'
require 'rake'

desc 'Deploy site to Now'
task :deploy do
  system "middleman build && ns ./build"
end
