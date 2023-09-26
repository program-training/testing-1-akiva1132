// ex1
export function len(str: string): number {
    return str.length
}
// ex2
export function palindrom(str: string): boolean {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}
//ex3
export function sort(numbers: number[]): number[] {
    return numbers.sort()
}
// ex4
export function sqrt1(num: number): number {
    return Math.sqrt(num)
}
// ex5
export function sumArray(arr: number[], num = 0) {
    if (arr.length === 0) return num
    const n = arr.pop()
    if (n !== undefined) return sumArray(arr, n + num)
}
console.log(sumArray([1, 2, 3, 4, 5]));
// ex 6

export interface user {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: { lat: string, lng: string }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export async function fetchUserData(): Promise<user> {
    return await fetch(`https://jsonplaceholder.typicode.com/users/${5}`)
        .then(a => a.json())
        .then(a => a)
}

// ex7 
export function pibo(arr: number[]) {
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            return "is not pib"
        }
    }
    return arr[arr.length - 1] + arr[arr.length - 2]
}
console.log(pibo([1, 1, 2, 3, 5]));

