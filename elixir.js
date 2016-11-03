Basic arithmetic

Open up iex and type the following expressions:

iex> 1 + 2
3
iex> 5 * 5
25
iex> 10 / 2
5.0
Notice that 10 / 2 returned a float 5.0 instead of an integer 5. This is expected. In Elixir, the operator / always returns a float. If you want to do integer division or get the division remainder, you can invoke the div and rem functions:

iex> div(10, 2)
5
iex> div 10, 2
5
iex> rem 10, 3
1