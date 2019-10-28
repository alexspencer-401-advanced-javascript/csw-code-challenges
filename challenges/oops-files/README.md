# Solving Code Challenge 4 | Oops File

## High-Level Solution (Take 1)

Broadly, we need to iterate through the friend's files, and reformat the naming of those files, presumably using FS readfile/writefile/rename.

1. More specifically, we need to go through our friend's files to get the contents and timestamp, associating that information with the file number.
2. Then we need to, based on the contents of each file by number, reformat the file name to be ```${FILE_CONTENT}-${OLD_FILE_NUMBER}-${LAST_MODIFIED_DATETIME}```.

## Smaller Chunks: (I forgot to commit as I went really...)

1. Go through and get an array of file paths
2. Go through contents of each file (fs readFile)
3. Find a way to get the last modified timestamp from the file (using fs.stat)
5. Reformat using fs rename


