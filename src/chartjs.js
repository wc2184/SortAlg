import { bogosort } from "./scripts/algs/bogosort";
import { bubbleSort } from "./scripts/algs/bubblesort";
import { insertionSort } from "./scripts/algs/insertionsort";
import { mergesort } from "./scripts/algs/mergesort";
import { quicksort } from "./scripts/algs/quicksort";
import { selectionSort } from "./scripts/algs/selectionsort";

export function Chartjs() {
  console.log("hi from charjs");

  let canvasElement = document.querySelector(".chart");
  let muhLabels = [
    "Hello",
    "boto",
    "koto",
    "noto",
    "teoto",
    "Hello",
    "boto",
    "koto",
    "noto",
    "teoto",
  ];
  let muhData = [2, 5, 2, 3, 5, 2, 5, 2, 3, 5];
  let config = {
    type: "bar",
    data: {
      labels: muhLabels,
      datasets: [
        {
          label: "Value",
          data: muhData,
          backgroundColor: ["orange", "red", "blue", "green", "purple"],
          categoryPercentage: 1.0,
          barPercentage: 1.0,
        },
      ],
    },
    options: {
      events: [],
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
        },
        x: {
          display: false,
        },
      },
      animation: {
        duration: 200,
      },
    },
  };

  let mainChart = new Chart(canvasElement, config);
  let quick = document.querySelector(".quick");
  let merge = document.querySelector(".merge");
  let bubble = document.querySelector(".bubble");
  let dropdown = document.querySelector(".dropdown");
  let plus = document.querySelector(".plus");
  let minus = document.querySelector(".minus");
  let right = document.querySelector(".right-arrow");
  let lastClicked = "none";
  plus.addEventListener("click", (e) => {
    let close = setInterval(() => {
      muhData.push(Math.floor(Math.random() * 10 + 1));
      muhLabels.push("googoo");
      mainChart.update();
    }, 20);

    setTimeout(() => {
      clearInterval(close);
    }, 200);
  });
  minus.addEventListener("click", (e) => {
    let close = setInterval(() => {
      muhData.pop();
      muhLabels.pop();
      mainChart.update();
    }, 20);

    setTimeout(() => {
      clearInterval(close);
    }, 200);
  });
  dropdown.addEventListener("click", (e) => {
    console.log(dropdown.classList.toggle("is-active"));
  });
  bubble.addEventListener("click", () => {
    console.log("main chartty", mainChart);
    bubbleSort(mainChart.data.datasets[0].data, mainChart);
    lastClicked = "bubble";
  });
  merge.addEventListener("click", (e) => {
    mergesort(mainChart.data.datasets[0].data, mainChart);
    lastClicked = "merge";
  });
  quick.addEventListener("click", (e) => {
    quicksort(mainChart.data.datasets[0].data, mainChart);
    lastClicked = "quick";
  });
  let status = 0; // my state for the switching the two sort rows
  let left = document.querySelector(".left-arrow");
  right.addEventListener("click", (e) => {
    status = 1;
    if (status === 1) {
      Array.from(document.getElementsByClassName("alt-algs")).forEach((e) => {
        // console.log(e, "hiee");
        e.style.display = "block";
      });
      Array.from(document.getElementsByClassName("norm-algs")).forEach((e) => {
        // console.log(e, "hiee");
        e.style.display = "none";
      });
      right.style = `pointer-events: none;
      filter: brightness(45%);`;
      left.classList.remove("flip-horizontally");
      left.classList.add("flip-horizontally-on");
    }
  });
  left.addEventListener("click", (e) => {
    status = 0;
    if (status === 0) {
      Array.from(document.getElementsByClassName("alt-algs")).forEach((e) => {
        // console.log(e, "hiee");
        e.style.display = "none";
      });
      Array.from(document.getElementsByClassName("norm-algs")).forEach((e) => {
        // console.log(e, "hiee");
        e.style.display = "block";
      });
      right.style = ``;
      left.classList.remove("flip-horizontally-on");
      left.classList.add("flip-horizontally");
    }
  });
  let insertion = document.querySelector(".insertion");
  let selection = document.querySelector(".selection");
  let bogo = document.querySelector(".bogo");
  insertion.addEventListener("click", (e) => {
    insertionSort(mainChart.data.datasets[0].data, mainChart);
    console.log("insertion");
    lastClicked = "insertion";
  });
  selection.addEventListener("click", (e) => {
    selectionSort(mainChart.data.datasets[0].data, mainChart);
    console.log("selection");
    lastClicked = "selection";
  });
  bogo.addEventListener("click", (e) => {
    bogosort(mainChart.data.datasets[0].data, mainChart);
    console.log("bogo");
    lastClicked = "bogo";
  });
  let ruby = document.querySelector(".ruby");
  let python = document.querySelector(".python");
  let javascript = document.querySelector(".javascript");

  // w3schools is the source
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  let codesample = document.querySelector(".textcontentforcode");
  // When the user clicks on the button, open the modal
  ruby.onclick = function () {
    modal.style.display = "block";
    lastClicked === "quick"
      ? (codesample.innerHTML = `Ruby
    def quicksort(arr, first, last)
    if first < last
      p_index = partition(arr, first, last)
      quicksort(arr, first, p_index - 1)
      quicksort(arr, p_index + 1, last)
    end
  
    arr
  end
  
  def partition(arr, first, last)
    # first select one element from the list, can be any element. 
    # rearrange the list so all elements less than pivot are left of it, elements greater than pivot are right of it.
    pivot = arr[last]
    p_index = first
    
    i = first
    while i < last
      if arr[i] <= pivot
        temp = arr[i]
        arr[i] = arr[p_index]
        arr[p_index] = temp
        p_index += 1
      end
      i += 1
    end
    temp = arr[p_index]
    arr[p_index] = pivot
    arr[last] = temp
    return p_index
  end
    `)
      : null;
    lastClicked === "merge"
      ? (codesample.innerHTML = `Ruby
    class Array

  def merge_sort(&prc)
    # See how I create a Proc if no block was given; this eliminates
    # having to later have two branches of logic, one for a block and
    # one for no block.
    prc ||= Proc.new { |x, y| x <=> y }

    return self if self.count <= 1

    midpoint = self.count / 2
    sorted_left = self.take(midpoint).merge_sort(&prc)
    sorted_right = self.drop(midpoint).merge_sort(&prc)

    Array.merge(sorted_left, sorted_right, &prc)

  end

  private
  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end

    merged.concat(left)
    merged.concat(right)

    merged
  end
end`)
      : null;
    lastClicked === "bubble"
      ? (codesample.innerHTML = `Ruby
      def bubble_sort!
    # Without a proc
    sorted = false
    until sorted
      sorted = true

      self.each_with_index do |el, i|
        next if i + 1 == self.length
        j = i + 1
        if self[i] > self[j]
          sorted = false
          self[i], self[j] = self[j], self[i]
        end
      end
    end

    self
  end

  def bubble_sort!(&prc)
    # With a proc
    prc ||= Proc.new { |x, y| x <=> y }

    sorted = false
    until sorted
      sorted = true

      self.each_with_index do |el, i|
        next if i + 1 == self.length
        j = i + 1
        if prc.call(self[i], self[j]) == 1
          sorted = false
          self[i], self[j] = self[j], self[i]
        end
      end
    end

    self
  end

  def bubble_sort(&prc)
    self.dup.bubble_sort!(&prc)
  end
  `)
      : null;
    lastClicked === "insertion"
      ? (codesample.innerHTML = `Ruby
    def insertion_sort(array)
    for i in 1...(array.length)  # Step 1
        j = i # Step 2
        while j > 0 # Step 3
            if array[j-1] > array[j] # Step 4
                temp = array[j]
                array[j] = array[j-1]
                array[j-1] = temp
            else
                break
            end
            j = j - 1 # Step 5
        end
    end
    return array
end
    `)
      : null;
    lastClicked === "selection"
      ? (codesample.innerHTML = `Ruby
    def selection_sort(array)
  n = array.length - 1
  n.times do |i|
    min_index = i
    for j in (i + 1)..n
      min_index = j if array[j] < array[min_index]
    end
    array[i], array[min_index] = array[min_index], array[i] if min_index != i
  end
  puts array
end
    `)
      : null;
    lastClicked === "bogo"
      ? (codesample.innerHTML = `Ruby
    def bogosort(a)
  until sorted?(a)
    p a
    a = a.shuffle
  end

  a
end

def sorted?(a)
  s = true

  (a.length-1).times do |i|
    if a[i] > a[i+1]
      s = false
    end
  end

  s
end
`)
      : null;
  };
  python.onclick = function () {
    modal.style.display = "block";
    lastClicked === "quick"
      ? (codesample.innerHTML = `Python
    def quick_sort(array):
    if len(array) < 2:
        return array
    else:
        pivot = array[0]
        less = [i for i in array[1:] if i <= pivot]
        greater = [i for i in array[1:] if i > pivot]
        return quick_sort(less) + [pivot] + quick_sort(greater)

    `)
      : null;
    lastClicked === "merge"
      ? (codesample.innerHTML = `Python
    def mergeSort(myList):
    if len(myList) > 1:
        mid = len(myList) // 2
        left = myList[:mid]
        right = myList[mid:]

        # Recursive call on each half
        mergeSort(left)
        mergeSort(right)

        # Two iterators for traversing the two halves
        i = 0
        j = 0
        
        # Iterator for the main list
        k = 0
        
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
              # The value from the left half has been used
              myList[k] = left[i]
              # Move the iterator forward
              i += 1
            else:
                myList[k] = right[j]
                j += 1
            # Move to the next slot
            k += 1

        # For all the remaining values
        while i < len(left):
            myList[k] = left[i]
            i += 1
            k += 1

        while j < len(right):
            myList[k]=right[j]
            j += 1
            k += 1

myList = [54,26,93,17,77,31,44,55,20]
mergeSort(myList)
print(myList)
    `)
      : null;
    lastClicked === "bubble"
      ? (codesample.innerHTML = `Python
    def bubbleSort(arr): 
    n = len(arr) 
  
    # Traverse through all array elements 
    for i in range(n-1): 
    # range(n) also work but outer loop will repeat one time more than needed. 
  
        # Last i elements are already in place 
        for j in range(0, n-i-1): 
  
            # traverse the array from 0 to n-i-1 
            # Swap if the element found is greater 
            # than the next element 
            if arr[j] > arr[j+1] : 
                arr[j], arr[j+1] = arr[j+1], arr[j] 
  
    `)
      : null;
    lastClicked === "insertion"
      ? (codesample.innerHTML = `Python
    def insertionSort(arr):
  
    # Traverse through 1 to len(arr)
    for i in range(1, len(arr)):
  
        key = arr[i]
  
        # Move elements of arr[0..i-1], that are
        # greater than key, to one position ahead
        # of their current position
        j = i-1
        while j >= 0 and key < arr[j] :
                arr[j + 1] = arr[j]
                j -= 1
        arr[j + 1] = key
    `)
      : null;
    lastClicked === "selection"
      ? (codesample.innerHTML = `Python
    def selectionSort(array, size):
    
    for ind in range(size):
        min_index = ind
 
        for j in range(ind + 1, size):
            # select the minimum element in every iteration
            if array[j] < array[min_index]:
                min_index = j
         # swapping the elements to sort the array
        (array[ind], array[min_index]) = (array[min_index], array[ind])
    `)
      : null;
    lastClicked === "bogo"
      ? (codesample.innerHTML = `Python
    while not Sorted(list) do
    shuffle (list)
done
    `)
      : null;
  };
  javascript.onclick = function () {
    modal.style.display = "block";
    lastClicked === "quick"
      ? (codesample.innerHTML = `JavaScript
    Array.prototype.quickSort = function (func) {
        if (this.length < 2) return this;
      
        if (!func) {
          func = (x, y) => {
            if (x < y) return - 1;
            return 1;
          };
        }
      
        const pivot = this[0];
        let left = this.slice(1).filter((el) => func(el, pivot) === -1);
        let right = this.slice(1).filter((el) => func(el, pivot) !== -1);
        left = left.quickSort(func);
        right = right.quickSort(func);
      
        return left.concat([pivot]).concat(right);
      };`)
      : null;
    lastClicked === "merge"
      ? (codesample.innerHTML = `JavaScript
    Array.prototype.mergeSort = function (func) {
        if (this.length <= 1) return this;
      
        if (!func) func = (left, right) => {
          return left < right ? -1 : left > right ? 1 : 0;
        };
      
        const midpoint = Math.floor(this.length / 2);
        const sortedLeft = this.slice(0, midpoint).mergeSort(func);
        const sortedRight = this.slice(midpoint).mergeSort(func);
        return merge(sortedLeft, sortedRight, func);
      };
      
      function merge(left, right, comparator) {
        let merged = [];
      
        while (left.length && right.length) {
          switch (comparator(left[0], right[0])) {
            case -1:
              merged.push(left.shift());
              break;
            case 0:
              merged.push(left.shift());
              break;
            case 1:
              merged.push(right.shift());
              break;
          }
        }
      
        merged = merged.concat(left, right);
        return merged;
      }
      `)
      : null;
    lastClicked === "bubble"
      ? (codesample.innerHTML = `JavaScript
    Array.prototype.bubbleSort = function (callback) {
        if (typeof callback !== "function") {
          callback = defaultCallback;
        }
      
        let resultArr = this.slice();
        let sorted = false;
        while (!sorted) {
          sorted = true;
          for (let i = 1, n = resultArr.length; i < n; i++) {
            if (callback(resultArr[i - 1], resultArr[i]) === 1) {
              sorted = false;
              let swap = resultArr[i - 1];
              resultArr[i - 1] = resultArr[i];
              resultArr[i] = swap;
            }
          }
        }
        return resultArr;
      };
    `)
      : null;
    lastClicked === "insertion"
      ? (codesample.innerHTML = `JavaScript
    let insertionSort = (inputArr) => {
        for (let i = 1; i < inputArr.length; i++) {
            let key = inputArr[i];
            let j = i - 1;
            while (j >= 0 && inputArr[j] > key) {
                inputArr[j + 1] = inputArr[j];
                j = j - 1;
            }
            inputArr[j + 1] = key;
        }
        return inputArr;
    };
    `)
      : null;
    lastClicked === "selection"
      ? (codesample.innerHTML = `JavaScript
    function selectionSort(arr){
        for(let i = 0; i<arr.length; i++){
            let minptr = i;
            for(let j = i+1; j<arr.length; j++){
                if(arr[minptr] > arr[j]){
                    minptr = j;
                }
            }
          //swap
            let temp = arr[i];
            arr[i] = arr[minptr];
            arr[minptr] = temp;
        }
        return arr;
    }
    `)
      : null;
    lastClicked === "bogo"
      ? (codesample.innerHTML = `JavaScript
    function isSorted(arr) {
        for(var i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]) {
                return false;
            }
        }
        return true;
    }
    
    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }
    
    function bogoSort(arr) {
      while (!isSorted(arr)) {
          arr = shuffle(arr);
      }
      return arr;
    }
    `)
      : null;
  };

  let question = document.querySelector(".question");
  let questionmodal = document.querySelector(".questionmodal");
  var spanquestion = document.querySelector(".closequestion");

  question.addEventListener("click", (e) => {
    questionmodal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  spanquestion.onclick = function () {
    questionmodal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal || event.target == questionmodal) {
      modal.style.display = "none";
      questionmodal.style.display = "none";
    }
  };
}
