# Solving Code Challenge 4 | Oops File

## High-Level Solution:

Broadly, we need to iterate through the friend's files, and reformat the naming of those files, presumably using FS readfile/writefile.

1. More specifically, we need to go through our friend's files to get the contents and timestamp, associating that information with the file number.
2. Then we need to, based on the contents of each file by number, reformat the file name to be ```${FILE_CONTENT}-${OLD_FILE_NUMBER}-${LAST_MODIFIED_DATETIME}```.

## Smaller Chunks:

1. Go through contents of each file (fs readFile)
2. Find a way to get the last modified timestamp from the file
3. Find a way to access the file contents, the timestamp, and the number associated with that file. 
4. Reformat using fs rename.


