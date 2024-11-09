import { Checkbox } from '@/components/ui/checkbox';
import { toggleButton } from '@/redux/buttonSlice';
import { RootState } from '@/redux/store';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Arrey {
  id: number;
  subTitle?: string;
  title: string;
}

interface CustSelectorProps {
  title: string;
  contentArr: Arrey[];
}

const MultSelector: React.FC<CustSelectorProps> = ({ title, contentArr }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [checkSubTitle, setCheckSubTitle] = useState(false);
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]); // State to track selected titles

  const dispatch = useDispatch();
  const { buttonIsClicked } = useSelector((state: RootState) => state.button);

  const handleSave = () => {
    dispatch(toggleButton());
    console.log('Selected Titles:', selectedTitles); // Log or handle selected titles
    setIsOpen(false);
  };

  useEffect(() => {
    if (contentArr[0]?.subTitle) {
      setCheckSubTitle(true);
    }
  }, [contentArr]);

  const handleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleCheckboxChange = (title: string, isChecked: boolean) => {
    setSelectedTitles((prev) => {
      if (isChecked) {
        return [...prev, title]; // Add title if checked
      } else {
        return prev.filter((t) => t !== title); // Remove title if unchecked
      }
    });
  };

  const handleTitleClick = (event: React.MouseEvent) => {
    event.stopPropagation(); 
    setIsOpen(false); 
    console.log('first')
  };

  return (
    <>
      <div className="relative gap-[4px]">
        <div
          onClick={handleDropdown}
          className={`flex justify-center items-center py-2 pr-2 pl-3 rounded-lg border-[1px] cursor-pointer after:content-['▼'] after:text-xs after:ml-1
            after:inline-flex after:items-center ${isOpen ? 'after:-rotate-180' : ''} transition-transform h-10 ${checkSubTitle ? 'w-[163px]' : 'w-[97px]'}`}
        >
          <p>{title}</p>
        </div>
        <div className='relative'>
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 flex flex-col gap-4 bg-[#FFFFFF] border-[1px] p-6"
            >
              <div className="w-[296px] flex justify-center">
                <p className="w-[248px] font-semibold h-6">{title}</p>
              </div>
              <ul>
                {contentArr.map((taskOption) => (
                  <div className="w-[296px] flex justify-center items-center" key={taskOption.id}>
                    <div className="w-[248px] gap-4 flex flex-col">
                      <div className="flex justify-between items-center border-b-[1px] h-14">
                        <li>
                          <div>
                            {checkSubTitle && <p className='text-xs'>{taskOption.subTitle}</p>}
                            <p className='text-title'>{taskOption.title}</p>
                          </div>
                        </li>
                        <Checkbox 
                          onChange={(e) => handleCheckboxChange(taskOption.title, e.target.checked)} // Update state on checkbox change
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
              <div className="w-[296px] flex justify-center items-center">
                <div className="flex justify-between items-center h-10 w-[248px]">
                  <button className="text-textBlue font-medium">Clear</button>
                  <button 
                    id={title} 
                    className="h-10 bg-[#F2F2F2] w-[99px] font-bold text-[#808080]"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MultSelector;
