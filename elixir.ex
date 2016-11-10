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

//

var array =[0,1,2,3];
var length = array.length;
var start = 0;
var sum =0 

var recurscionFunction = function () {
	if(start != length){
		sum = sum +array[start];
		start++;
		recursionFunction();
	}
	else{
		console.log('done', sum);
	}
}
recursionFunction();

//

defmodule Math do
	def sum_list([head | tail], accumulator) do 
		sum_list(tail, head + accumlator)
	def sum_list([], accumulrtor) do
		accumulator
	end 
end 


defmodule MeterToFootConvert do 
	def convert(m) do 
		m* 3.28084
	end 
end 


def convert(:inch, m) do 
