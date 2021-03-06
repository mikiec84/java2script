/*
 * $Header: /home/eclipse/org.eclipse.osgi/osgi/src/org/osgi/service/condpermadmin/BundleSignerCondition.java,v 1.6.4.2 2005/08/17 19:18:07 twatson Exp $
 * 
 * Copyright (c) OSGi Alliance (2005). All Rights Reserved.
 * Copyright (c) 2005 IBM Corporation and others.
 * 
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this 
 * distribution, and is available at http://www.eclipse.org/legal/epl-v10.html.
 */

package org.osgi.service.condpermadmin;

import org.eclipse.osgi.framework.internal.core.AbstractBundle;
import org.osgi.framework.Bundle;

/**
 * Condition to test if the signer of a bundle matches a pattern. Since the bundle's signer can
 * only change when the bundle is updated, this condition is immutable.
 * <p>
 * The condition expressed using a single String that specifies a Distinguished
 * Name (DN) chain to match bundle signers against. DN's are encoded using IETF
 * RFC 2253. Usually signers use certificates that are issued by certificate
 * authorities, which also have a corresponding DN and certificate. The
 * certificate authorities can form a chain of trust where the last DN and
 * certificate is known by the framework. The signer of a bundle is expressed as
 * signers DN followed by the DN of its issuer followed by the DN of the next
 * issuer until the DN of the root certificate authority. Each DN is separated
 * by a semicolon.
 * <p>
 * A bundle can satisfy this condition if one of its signers has a DN chain that
 * matches the DN chain used to construct this condition. Wildcards (`*') can be
 * used to allow greater flexibility in specifying the DN chains. Wildcards can
 * be used in place of DNs, RDNs, or the value in an RDN. If a wildcard is used
 * for a value of an RDN, the value must be exactly "*" and will match any value
 * for the corresponding type in that RDN. If a wildcard is used for a RDN, it
 * must be the first RDN and will match any number of RDNs (including zero
 * RDNs).
 * 
 * @version $Revision: 1.6.4.2 $
 */
public class BundleSignerCondition {
	private static final String CONDITION_TYPE = "org.osgi.service.condpermadmin.BundleSignerCondition";
	/**
	 * Constructs a Condition that tries to match the passed Bundle's location
	 * to the location pattern.
	 * 
	 * @param bundle The Bundle being evaluated.
	 * @param info The ConditionInfo to construct the condition for. The args of
	 *        the ConditionInfo specify a single String specifying the chain of
	 *        distinguished names pattern to match against the signer of the
	 *        Bundle.
	 * @return A Condition which checks the signers of the specified bundle.        
	 */
	static public Condition getCondition(Bundle bundle, ConditionInfo info) {
		if (!CONDITION_TYPE.equals(info.getType()))
			throw new IllegalArgumentException("ConditionInfo must be of type \"" + CONDITION_TYPE + "\"");
		String[] args = info.getArgs();
		if (args.length != 1)
			throw new IllegalArgumentException("Illegal number of args: " + args.length);
		// implementation specific code used here
		AbstractBundle ab = (AbstractBundle) bundle;
		return ab.getBundleData().matchDNChain(args[0]) ? Condition.TRUE : Condition.FALSE;
	}

	private BundleSignerCondition() {
		// private constructor to prevent objects of this type
	}
}
