vi filename - open file
set showmode
u ctrl-r
using count
ZZ
:q! - discard changes
:e! reloads the original version
:help
:help ctrl-a
:help v_ctrl-a
:help i_CTRL_H
:help -t
:help 'number'
:help i_<esc>
:help i_<Up>
:help pattern<Ctrl-D>
:help pattern<Tab>
:helpgrep pattern
:cn - next match
:cprev :cN - previous match
:cfirst
:clast
:copen
:cclose
ge vs e
gE vs E
B vs W
b vs w
fh fy
3f"
H M L ( Home, Middle, Last )
:set ruler
:set ignorecase
/one /two /three /<UP>
3*
/the\> only find words that end in the - \>
g* g# - partial words



#### 03



ctrl-] jump on tag
ctrl-t (pop tag - goes to previous position)
ctrl-o (jump to older) does the same thing

. searches for any character

:jumps
`a
:marks
You will notice a few special marks.  These include:

	'	The cursor position before doing a jump
	"	The cursor position when last editing the file
	[	Start of the last change
	]	End of the last change

  d4w
  d2e
  d$

	x  stands for  dl  (delete character under the cursor)
	X  stands for  dh  (delete character left of the cursor)
	D  stands for  d$  (delete to end of the line)
	C  stands for  c$  (change to end of the line)
	s  stands for  cl  (change one character)
	S  stands for  cc  (change a whole line)

  ------------------------------

	f<   find first <     --->
	df>  delete to >	 -->
	f<   find next <	   --------->
	.    repeat df>			    --->
	f<   find next <		       ------------->
	.    repeat df>					    -->

  ------------------------------


		name		  Q1	  Q2  	Q3
		pierre		123	  455	  234
		john		  0	    90	  39
		steve		  392	  63	  334

