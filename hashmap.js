export default class HashMap {
    constructor(loadFactor=0.75, capacity=16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.threshold = this.capacity * this.loadFactor;
        this.buckets = new Array(this.capacity).fill([]);
    } 

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {
        // if there is no key
        let hashvalue = this.hash
        let idx = hashvalue % this.capacity

        if (this.length()<this.capacity)
        {
            // get the bucket 
            let bucket = this.buckets[idx]

            // if key isnt alreay present
            if (!this.has(key))
            {
                // since bucket has no key, append the firt key value in bucket
                this.buckets[idx].push([key,value])
            }

            else{
                // if key is already present change the value 
                for (let i = 0; i< bucket.length; i++)
                {
                    // compare the key of each key value pair 
                    if (bucket[i][0]==key)
                    {
                        // return the value
                        this.buckets[idx][i][1] = value;
                    }
                }
            }
        }
        else
        {
            console.log("Capacity full")
        }
        
    }

    get(key)
    {
        if (this.has(key))
        {
            // get the bucket 
             let idx = this.hash(key) % this.capacity
            // get the bucket where key is stored
            let bucket = this.buckets[idx]

            for (let i = 0; i< bucket.length; i++)
            {
                // compare the key of each key value pair 
                if (bucket[i][0]==key)
                {
                    // return the value
                    return bucket[i][1]
                }
            }

        }
    }

    has(key)
    {   if (this.length() != 0)
        {
            let key_list = this.keys()
            for (let i = 0; i< key_list.length; i++)
            {
                if (key_list[i] == key)
                {
                    return true
                }
            }
        }
        return false
    }

    remove(key)
    {
       
        if (this.has(key))
        {
            let idx = this.hash(key) % this.capacity
            // get the bucket where key is stored
            let bucket = this.buckets[idx]

            // find the matching key
            for (let i = 0; i< bucket.length; i++)
            {
                // compare the key of each key value pair 
                if (bucket[i][0]==key)
                {
                    // if key found then remove the key value pair from hashmap
                    this.buckets[idx].splice(i,1)
                }
            }
        }
        else{
            console.log("No such key available")
        }
    }

    length()
    {
        let total_length = 0;
        for (let i = 0; i < this.buckets.length; i++)
        {
            // get each bucket length
            let bucket_length = this.buckets[i].length
            total_length += bucket_length
        }
        return total_length;
    }

    clear()
    {
        // reset the hashmap or clear the hash map
        this.buckets = new Array(this.capacity).fill([]);
    }

    keys()
    {
        let key_list = []
        // get the bucket set 
        let buckets = this.buckets;
        for (let i = 0; i< buckets.length; i++)
        {
            // loop through each bucket that exists in buckets
            let bucket = buckets[i]

            for (let j = 0; j< bucket.length; j++)
            {
                // key_value pair 
                pair = bucket[j]
                key = pair[0]
                key_list.push(key)
            }
        }
        return key_list
    }

    values()
    {
        let value_list = []
        // get the bucket set 
        let buckets = this.buckets;
        for (let i = 0; i< buckets.length; i++)
        {
            // loop through each bucket that exists in buckets
            let bucket = buckets[i]

            for (let j = 0; j< bucket.length; j++)
            {
                // key_value pair 
                pair = bucket[j]

                // values 
                value = pair[1]
                key_list.push(value)
            }
        }
        return value_list
    }

    entries()
    {
        let entry_list = []
        let bucket_list = this.buckets

        for (let i = 0; i< bucket_list.length; i++)
        {
            bucket = bucket_list[i]
            if (bucket != [])
            {
                // loop through the bucket
                for (let j = 0; j < bucket.length; j++)
                {
                    pair = bucket[j]
                    entry_list.push(pair)
                }
            }
        }
        return entry_list
    }

}
