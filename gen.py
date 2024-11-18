from art import *

# 使用自定義字符生成 ASCII 藝術字
#for i in FONT_NAMES:
#	res=text2art("Hello", font=i)
#	print(i)
#	print(res)

a="Happy Birthday to Janette".split(' ')
b=[text2art(i, font="cli8x8").replace(' ', '.') for i in a]
c=[len(i.split('\n')[0]) for i in b]
mx=80
res=''
print('.'*mx)
res+='.'*mx
for i in range(len(a)):
	for j in b[i].split('\n'):
		l='.'*((mx-len(j)+1)//2)
		r='.'*((mx-len(j))//2)
		print(l+j+r)
		res+=l+j+r
print(res)
