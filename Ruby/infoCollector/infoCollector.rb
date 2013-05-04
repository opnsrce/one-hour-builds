#!/usr/bin/ruby

print "What is your name? ";
name = gets.chomp.strip;

print "How old are you (in years)? "
age = gets.chomp.strip;

print "What is your favorite color? "
color = gets.chomp.strip;

print "Who is your favorite author? "
author = gets.chomp.strip;

if name.nil? or name.length == 0 then
    name = "Stranger";
end

print "Hello, #{name}! \n \n";

print "Today, I learned the following things about you: \n";
unless age.nil? or age.length == 0 then
    print "    - You are #{age} years old. \n"; 
end

unless color.nil? or color.length == 0 then
    print "    - Your favorite color is #{color}. \n";
end 

unless author.nil? or author.length == 0 then
    print "    - Your favorite author is #{author}. \n";
end
print "\n \n"