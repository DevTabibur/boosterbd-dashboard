import React from 'react'
import UserCard from '../../components/UserCard';

const CurrentPackage = () => {
    const value = [
        { name: "Bronze", mBalance: "501$-800$", id: 1, isActive: false, bgColor: '#C3BE47', bgColorBody: '#FDFBC4' },
        { name: "Bronze", mBalance: "501$-800$", id: 2, isActive: true, bgColor: '#C3BE47', bgColorBody: '#FDFBC4' },
        { name: "Silver", mBalance: "801$-1000$", id: 3, isActive: true, bgColor: '#FFFFFF', bgColorBody: '#DADADA' },
        { name: "Platinum", mBalance: "301$-500$", id: 4, isActive: true, bgColor: '#8756EF', bgColorBody: '#E4D8FF' },
        { name: "Gold", mBalance: "501$-800$", id: 5, isActive: true, bgColor: '#C3BE47', bgColorBody: '#FDFBC4' },
        { name: "Diamond", mBalance: "801$-1000$", id: 6, isActive: true, bgColor: '#FFFFFF', bgColorBody: '#DADADA' }
    ];
    return (
        <>
            <div className=''>
                <div className='grid grid-row md:grid-cols-2 lg:grid-cols-3 gap-10 px-24 py-24'>
                    {
                        value.map((item) => <UserCard data={item} key={item.id} />)
                    }
                </div>
            </div>
        </>
    )
}

export default CurrentPackage