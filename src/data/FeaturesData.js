import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Feature 1',
		description: 'Extremely delightful description of the feature',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Feature 2',
		description: 'Extremely delightful description of the feature',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Feature 3',
		description: 'Extremely delightful description of the feature',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Feature 4',
		description: 'Extremely delightful description of the feature',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Feature 5',
		description: 'Extremely delightful description of the feature',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Feature 6',
		description:
			'Extremely delightful description of the feature',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];